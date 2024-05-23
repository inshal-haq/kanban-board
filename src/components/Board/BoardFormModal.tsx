import Board from "../../models/board";
import Column from "../../models/column";

import DialogModal from "../UI/DialogModal";
import TextField from "../UI/TextField";
import { useInput } from "../../hooks/useInput";
import { useState } from "react";
import Button from "../UI/Button";
import { FiX } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { boardActions } from "../../store/board-slice";
import { uiActions } from "../../store/ui-slice";

interface BoardFormModalProps {
  open: boolean;
  onClose: () => void;
  isEditing?: boolean;
}

const BoardFormModal: React.FC<BoardFormModalProps> = (props) => {
  const { open, onClose, isEditing } = props;
  const initialColumns = [new Column(""), new Column("")];
  const isNotEmpty = (value: string) => value.trim() !== "";
  const dispatch = useAppDispatch();
  const isMobile = useAppSelector((state) => state.ui.isMobile);

  const boards = useAppSelector((state) => state.board.boards);
  const activeBoardIndex = useAppSelector(
    (state) => state.board.activeBoardIndex,
  );

  const activeBoard = isEditing ? boards[activeBoardIndex] : undefined;

  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameHasError,
  } = useInput(activeBoard?.name ?? "", isNotEmpty);

  const [columns, setColumns] = useState(
    activeBoard?.columns ?? initialColumns,
  );
  const [didEdits, setDidEdits] = useState([false, false]);
  const handleColumnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) => {
    const newColumns = [...columns];
    newColumns[index] = {
      ...newColumns[index],
      name: event.target.value,
    } as Column;

    const newDidEdits = [...didEdits];
    newDidEdits[index] = false;

    setColumns(newColumns);
    setDidEdits(newDidEdits);
  };
  const handleColumnBlur = (index: number) => {
    const newDidEdits = [...didEdits];
    newDidEdits[index] = true;
    setDidEdits(newDidEdits);
  };

  const columnHasError = (index: number) =>
    didEdits[index] && !isNotEmpty(columns[index].name);

  const columnPlaceholder = (index: number) => {
    let placeholder = "";
    switch ((index + 1) % 5) {
      case 1:
        placeholder = "e.g. Todo";
        break;
      case 2:
        placeholder = "e.g. Doing";
        break;
      case 3:
        placeholder = "e.g. Done";
        break;
      case 4:
        placeholder = "e.g. Who knows";
        break;
      case 0:
        placeholder = "e.g. Oh well";
        break;
    }
    return placeholder;
  };

  const handleAddColumn = () => {
    const newColumns = [...columns];
    newColumns.push(new Column(""));

    const newDidEdits = [...didEdits];
    newDidEdits.push(false);

    setColumns(newColumns);
    setDidEdits(newDidEdits);
  };

  const handleRemoveColumn = (id: string, index: number) => {
    const filteredColumns = columns.filter((column) => column.id !== id);

    const filteredEdits = didEdits.splice(index, 1);

    setColumns(filteredColumns);
    setDidEdits(filteredEdits);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isNotEmpty(nameValue)) {
      return;
    }
    const boardName = nameValue;

    const boardColumns = columns.filter((column) => isNotEmpty(column.name));
    if (boardColumns.length === 0) {
      return;
    }

    const newBoard = new Board(boardName, boardColumns);
    const plainBoard = newBoard.toPlainObject();

    if (isEditing) {
      dispatch(boardActions.editBoard({ activeBoardIndex, plainBoard }));
    } else {
      dispatch(boardActions.addBoard(plainBoard));
    }

    dispatch(boardActions.setActiveBoard(boards.length));

    if (isMobile) {
      dispatch(uiActions.closeSidebar());
    }
    props.onClose();
  };

  return (
    <DialogModal open={open} onClose={onClose} onFormSubmit={handleSubmit}>
      <h2 className="dark:text-white">
        {isEditing ? "Edit" : "Add New"} Board
      </h2>
      <label className="text-medium-gray">
        <p className="mb-2">Name</p>
        <TextField
          id="name"
          name="name"
          placeholder="e.g. Bucket List"
          value={nameValue}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          error={nameHasError}
        />
      </label>
      <fieldset className="text-medium-gray">
        <label htmlFor="columns">
          <p className="mb-2">Columns</p>
          <ul className="flex flex-col gap-2">
            {columns.map(({ id, name }, index) => (
              <div
                key={`${index}-${id}`}
                className="flex flex-1 items-center gap-4"
              >
                <TextField
                  id="columns"
                  name="columns"
                  placeholder={columnPlaceholder(index)}
                  value={name}
                  onChange={(event) => handleColumnChange(event, index)}
                  onBlur={() => handleColumnBlur(index)}
                  error={columnHasError(index)}
                />
                {columns.length !== 1 && (
                  <FiX
                    className="cursor-pointer text-xl hover:text-red"
                    onClick={() => handleRemoveColumn(id, index)}
                  />
                )}
              </div>
            ))}
          </ul>
        </label>
      </fieldset>
      <Button
        type="button"
        title="+ Add New Column"
        className="flex justify-center bg-main-purple bg-opacity-10 text-main-purple hover:bg-opacity-25 dark:bg-white"
        onClick={handleAddColumn}
      />
      <Button
        title={isEditing ? "Save Changes" : "Create Board"}
        className="flex justify-center bg-main-purple text-white hover:bg-main-purple-hover"
      />
    </DialogModal>
  );
};

export default BoardFormModal;

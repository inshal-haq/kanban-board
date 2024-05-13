import Board from "../../models/board";
import Column from "../../models/column";

import DialogModal from "../UI/DialogModal";
import TextField from "../UI/TextField";
import { useInput } from "../../hooks/useInput";
import { useState } from "react";
import Button from "../UI/Button";
import { FiX } from "react-icons/fi";

const BoardFormModal: React.FC<{
  open: boolean;
  onClose: () => void;
  board?: Board;
}> = (props) => {
  const { open, onClose, board } = props;

  const isNotEmpty = (value: string) => value.trim() !== "";

  const initialColumns = [new Column(""), new Column("")];
  const [columns, setColumns] = useState(board?.columns ?? initialColumns);
  const [didEdits, setDidEdits] = useState([false, false]);
  const handleColumnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) => {
    const newColumns = [...columns];
    newColumns[index] = {
      ...newColumns[index],
      name: event.target.value,
    };

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

  const {
    value: titleValue,
    handleInputChange: handleTitleChange,
    handleInputBlur: handleTitleBlur,
    hasError: titleHasError,
  } = useInput(board?.name ?? "", isNotEmpty);

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

  return (
    <DialogModal open={open} onClose={onClose}>
      <h2>{board ? "Edit" : "Add New"} Board</h2>
      <label className="text-medium-gray">
        <p className="mb-2">Name</p>
        <TextField
          id="title"
          name="title"
          placeholder="e.g. Bucket List"
          value={titleValue}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          error={titleHasError}
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
                <FiX
                  className="cursor-pointer text-xl hover:text-red"
                  onClick={() => handleRemoveColumn(id, index)}
                />
              </div>
            ))}
          </ul>
        </label>
      </fieldset>
      <Button
        title="+ Add New Column"
        className="flex justify-center bg-main-purple bg-opacity-10 text-main-purple hover:bg-opacity-25"
        onClick={handleAddColumn}
      />
      <Button
        title={board ? "Save Changes" : "Create Board"}
        className="flex justify-center bg-main-purple text-white hover:bg-main-purple-hover"
        onClick={() => console.log("todo")}
      />
    </DialogModal>
  );
};

export default BoardFormModal;

import Button from "../UI/Button";

const Board = () => {
  return (
    <div className="mt-80 flex flex-col items-center justify-center gap-8">
      The board is empty. Create a new column to get started.
      <Button title="+ Add New Column" className="bg-main-purple text-white" />
    </div>
  );
};

export default Board;

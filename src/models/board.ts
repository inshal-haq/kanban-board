import Column from "./column";

class Board {
  id: string;
  name: string;
  columns: Column[];

  constructor(name: string, columns: Column[]) {
    this.id = new Date().toISOString();
    this.name = name;
    this.columns = columns;
  }
}

export default Board;

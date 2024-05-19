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

  toPlainObject() {
    return {
      id: this.id,
      name: this.name,
      columns: this.columns.map((column) => {
        return column instanceof Column ? column.toPlainObject() : column;
      }),
    };
  }
}

export default Board;

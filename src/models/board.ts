import Column from "./column";
import { v4 as uuidv4 } from "uuid";

class Board {
  id: string;
  name: string;
  columns: Column[];

  constructor(name: string, columns: Column[]) {
    this.id = uuidv4();
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

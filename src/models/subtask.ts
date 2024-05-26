import { v4 as uuidv4 } from "uuid";

class Subtask {
  id: string;
  title: string;
  isCompleted: boolean;

  constructor(title: string) {
    this.id = uuidv4();
    this.title = title;
    this.isCompleted = false;
  }

  toPlainObject() {
    return {
      id: this.id,
      title: this.title,
      isCompleted: this.isCompleted,
    };
  }
}

export default Subtask;

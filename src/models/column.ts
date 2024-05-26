import Task from "./task";
import { v4 as uuidv4 } from "uuid";

class Column {
  id: string;
  name: string;
  tasks: Task[];

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
    this.tasks = [];
  }

  toPlainObject() {
    return {
      id: this.id,
      name: this.name,
      tasks: this.tasks.map((task) => {
        return task instanceof Task ? task.toPlainObject() : task;
      }),
    };
  }
}

export default Column;

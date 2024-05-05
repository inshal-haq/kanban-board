import Task from "./task";

class Column {
  id: string;
  name: string;
  tasks: Task[];

  constructor(name: string) {
    this.id = new Date().toISOString();
    this.name = name;
    this.tasks = [];
  }
}

export default Column;

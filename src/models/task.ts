import Subtask from "./subtask";

class Task {
  id: string;
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];

  constructor(
    title: string,
    description: string,
    status: string,
    subtasks: Subtask[],
  ) {
    this.id = new Date().toISOString();
    this.title = title;
    this.description = description;
    this.status = status;
    this.subtasks = subtasks;
  }

  toPlainObject() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      status: this.status,
      subtasks: this.subtasks.map((subtask) => {
        return subtask instanceof Subtask ? subtask.toPlainObject() : subtask;
      }),
    };
  }
}

export default Task;

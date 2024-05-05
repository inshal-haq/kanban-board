class Subtask {
  id: string;
  title: string;
  isCompleted: boolean;

  constructor(title: string, isCompleted: boolean) {
    this.id = new Date().toISOString();
    this.title = title;
    this.isCompleted = isCompleted;
  }
}

export default Subtask;

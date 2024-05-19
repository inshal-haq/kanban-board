class Subtask {
  id: string;
  title: string;
  isCompleted: boolean;

  constructor(title: string) {
    this.id = new Date().toISOString();
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

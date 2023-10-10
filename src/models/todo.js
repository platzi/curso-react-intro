import { v4 as uuidv4 } from "uuid";

class Todo {
  constructor(text, completed = false) {
    this.id = uuidv4();
    this.text = text;
    this.completed = completed;
  }
}

export default Todo;

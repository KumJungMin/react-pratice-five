export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoAction {
  type: string;
  todo: Todo;
  id: number;
}

import type { ITodo } from "../atoms";

interface ITodoProps {
  todo: ITodo;
}

function Todo({ todo }: ITodoProps) {
  return (
    <div>
      <h1>{todo.text}</h1>
    </div>
  );
}

export default Todo;

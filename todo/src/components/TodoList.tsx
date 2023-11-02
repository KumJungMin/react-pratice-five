import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../contexts/todoContext";

const Container = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();
  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </Container>
  );
}

export default TodoList;
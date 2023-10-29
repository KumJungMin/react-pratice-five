import { styled } from "styled-components";
import Todo from "../components/Todo";
import { useRecoilState } from "recoil";
import { todoState, TodoType } from "../atoms";
import { Button, Container } from "../components/styles/index.styled";
import { Link } from "react-router-dom";

function Todos() {
  const [todos, setTodos] = useRecoilState(todoState);

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          const newType = todo.type === TodoType.DOING ? "done" : "doing";
          return { ...todo, type: newType };
        }
        return todo;
      })
    );
  };
  return (
    <Container>
      <Link to={{ pathname: "complete" }}>완료 보기</Link>
      {todos.map((todo) => {
        return (
          <>
            <Todo
              key={todo.id}
              todo={todo}
            />
            <Button onClick={() => updateTodo(todo.id)}>
              {todo.type === "doing" ? "진행 중" : "완료"}
            </Button>
            <Button onClick={() => removeTodo(todo.id)}>제거</Button>
          </>
        );
      })}
    </Container>
  );
}

export default Todos;

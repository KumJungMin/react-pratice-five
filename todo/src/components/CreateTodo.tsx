import { useState } from "react";
import { styled } from "styled-components";
import { useSetRecoilState } from "recoil";
import { todoState, TodoType } from "../atoms";

const Form = styled.form``;
const TodoInput = styled.input``;
const Button = styled.button``;

function CreateTodo() {
  const [text, setText] = useState<string>("");
  const setTodos = useSetRecoilState(todoState);

  const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지
    setTodos((prev) => {
      const newTodo = { id: prev.length + 1, text, type: TodoType.DOING };
      return [...prev, newTodo];
    });
    setText("");
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setText(value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <TodoInput
        type="text"
        id="todo"
        name="todo"
        value={text}
        onChange={onChange}
      />
      <Button>등록</Button>
    </Form>
  );
}

export default CreateTodo;

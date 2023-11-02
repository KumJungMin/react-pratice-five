import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <Container>
      <TodoItem
        id={1}
        text="프로젝트 생성하기"
        done
      />
    </Container>
  );
}

export default TodoList;

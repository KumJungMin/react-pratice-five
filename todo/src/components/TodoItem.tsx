import React from "react";
import styled from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../contexts/todoContext";
import type { TodoDispatch } from "../types/todo";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    // Remove 컴포넌트를 보여줍니다.
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<StyleProps>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props: StyleProps) =>
    props.done &&
    `
  border: 1px solid #38d9a9; 
  color: #38d9a9;
  `}
`;

// styled에 props 넘길 때는 타입 선언 필수!!
const Text = styled.div<StyleProps>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) => props.done && `color: #ced4da;`}
`;

interface TodoItemProps {
  id: number;
  done: boolean;
  text: string;
}

interface StyleProps {
  done: boolean;
}

function TodoItem({ id, done, text }: TodoItemProps) {
  const dispatch = useTodoDispatch() as TodoDispatch;
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <ItemBlock>
      <CheckCircle
        done={done}
        onClick={onToggle}
      >
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </ItemBlock>
  );
}

// React.memo 를 사용하여 TodoItem 컴포넌트의 불필요한 렌더링을 방지합니다.
export default React.memo(TodoItem);

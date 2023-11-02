import styled from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

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
  return (
    <ItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </ItemBlock>
  );
}

export default TodoItem;

import { useReducer } from "react";
import type { Todo, TodoAction } from "../types/todo";
// 1. 초기값 설정
const initialTodos = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 3,
    text: "Context 만들기",
    done: false,
  },
  {
    id: 4,
    text: "기능 구현하기",
    done: false,
  },
];
// 2. 리듀서 함수 만들기
function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function useTodoReducer() {
  // userReducer의 첫번째 파라미터는 리듀서 함수, 두번째 파라미터는 초기값
  // export해서 context에서 사용할 수 있도록 함
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return [state, dispatch];
}

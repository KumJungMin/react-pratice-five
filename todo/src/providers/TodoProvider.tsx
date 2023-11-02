import { createContext, useReducer } from "react";
import type { Todo, TodoAction } from "../types/todo";
import useTodoState from "../reducers/todo";

type TodoDispatch = (action: TodoAction) => void;
type TodoState = Todo[];

// Tip!! 하나의 Context 를 만들어서 두개의 Context 를 만들어서 따로 따로 넣어줌
// 이렇게 하면 dispatch 만 필요한 컴포넌트에서 불필요한 렌더링 방지 가능
// 추가적으로, 사용하게 되는 과정에서 더욱 편리함
const TodoStateContext = createContext<TodoState | undefined>(undefined);
const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useTodoState();
  return (
    <TodoStateContext.Provider value={state as TodoState}>
      <TodoDispatchContext.Provider value={dispatch as TodoDispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

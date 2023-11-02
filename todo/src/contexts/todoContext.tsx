import { createContext, useContext } from "react";
import type { TodoState, TodoDispatch } from "../types/todo";
import useTodoReducer from "../reducers/todo";

// Tip!! 하나의 Context 를 만들어서 두개의 Context 를 만들어서 따로 따로 넣어줌
// 이렇게 하면 dispatch 만 필요한 컴포넌트에서 불필요한 렌더링 방지 가능
// 추가적으로, 사용하게 되는 과정에서 더욱 편리함
const TodoStateContext = createContext<TodoState | undefined>(undefined);
const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined);

// 1. Provider를 만들어서 컴포넌트를 감싸주면, 하위 컴포넌트에서 Context에 접근 가능
export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useTodoReducer();
  return (
    <TodoStateContext.Provider value={state as TodoState}>
      <TodoDispatchContext.Provider value={dispatch as TodoDispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// 2. Context에 접근하기 위한 커스텀 훅
export function useTodoState() {
  return useContext(TodoStateContext);
}
export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

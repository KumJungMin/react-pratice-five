import { createContext, useContext, useRef } from "react";
import type { TodoState, TodoDispatch } from "../types/todo";
import useTodoReducer from "../reducers/todo";

// Tip!! 하나의 Context 를 만들어서 두개의 Context 를 만들어서 따로 따로 넣어줌
// 이렇게 하면 dispatch 만 필요한 컴포넌트에서 불필요한 렌더링 방지 가능
// 추가적으로, 사용하게 되는 과정에서 더욱 편리함
const TodoStateContext = createContext<TodoState | null>(null);
const TodoDispatchContext = createContext<TodoDispatch | null>(null);
const TodoNextIdContext = createContext<
  React.MutableRefObject<number> | undefined
>(undefined);

// 1. Provider를 만들어서 컴포넌트를 감싸주면, 하위 컴포넌트에서 Context에 접근 가능
export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useTodoReducer();
  const nextId = useRef(5);
  // 새로운 항목을 추가 할 때 사용 할 고유 ID

  return (
    <TodoStateContext.Provider value={state as TodoState}>
      <TodoDispatchContext.Provider value={dispatch as TodoDispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// 2. Context에 접근하기 위한 커스텀 훅
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

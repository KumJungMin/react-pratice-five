import { createContext, useReducer } from "react";
import { initMemoList, reducer } from "../reducers/memo";

// context를 데이터용, 조작용으로 나눠, 재사용성을 높이고 재렌더링을 최소화한다.
const MemState = createContext({});
const MemoDispatch = createContext({});

interface MemoProviderProps {
  children: React.ReactNode;
}

// context를 사용하기 위한 커스텀 훅
export function MemoProvider({ children }: MemoProviderProps) {
  const [value, dispatch] = useReducer(reducer, initMemoList);
  return (
    <MemState.Provider value={value}>
      <MemoDispatch.Provider value={dispatch}>{children}</MemoDispatch.Provider>
    </MemState.Provider>
  );
}

import { createContext, useReducer, useContext, Dispatch } from "react";
import { initMemoList, reducer } from "../reducers/memo";
import type { Memo, MemoList } from "../types/memo";

interface MemoProviderProps {
  children: React.ReactNode;
}
type Action =
  | { type: "ADD_MEMO"; memo: Omit<Memo, "id">; id: string }
  | { type: "REMOVE_MEMO"; id: string; memoId: string };
type MemoDispatch = Dispatch<Action>;

// context를 데이터용, 조작용으로 나눠, 재사용성을 높이고 재렌더링을 최소화한다.
export const MemStateContext = createContext<MemoList | {}>({});
export const MemoDispatchContext = createContext<MemoDispatch | {}>({});

export function MemoProvider({ children }: MemoProviderProps) {
  const [value, dispatch] = useReducer(reducer, initMemoList);
  return (
    <MemStateContext.Provider value={value}>
      <MemoDispatchContext.Provider value={dispatch}>
        {children}
      </MemoDispatchContext.Provider>
    </MemStateContext.Provider>
  );
}

// context를 사용하기 위한 커스텀 훅
export function useMemoDispatch() {
  const context = useContext(MemoDispatchContext) as MemoDispatch;
  if (!context) throw new Error("MemoProvider not found");
  return context;
}

export function useMemoState() {
  const context = useContext(MemStateContext) as MemoList;
  if (!context) throw new Error("MemoProvider not found");
  return context;
}

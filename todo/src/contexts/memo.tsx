import { createContext, useReducer, useContext, Dispatch } from "react";
import { initMemoList, reducer } from "../reducers/memo";

// !!Memo를 별도 타입으로 분리
interface Memo {
  title: string;
  content: string;
  id: string;
}

type MemoState = Memo[];

type Action = { type: "ADD_MEMO"; memo: Memo };

type MemoDispatch = Dispatch<Action>;

// context를 데이터용, 조작용으로 나눠, 재사용성을 높이고 재렌더링을 최소화한다.
export const MemStateContext = createContext<MemoState | {}>({});
export const MemoDispatchContext = createContext<MemoDispatch | {}>({});

interface MemoProviderProps {
  children: React.ReactNode;
}

// context를 사용하기 위한 커스텀 훅
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

export function useMemoDispatch() {
  const context = useContext(MemoDispatchContext) as MemoDispatch;
  if (!context) throw new Error("MemoProvider not found");
  return context;
}

export function useMemoState() {
  const context = useContext(MemStateContext) as MemoState;
  if (!context) throw new Error("MemoProvider not found");
  return context;
}

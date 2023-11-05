import { useReducer, createContext, useContext, Dispatch } from "react";
import { commentsReducer } from "../reducers/comment";
import type { IAction, Comments } from "../reducers/comment";

interface MemoProviderProps {
  children: React.ReactNode;
}

type CommentsDispatch = Dispatch<IAction>;

// 1. 데이터, 데이터 조작용 컨텍스트 생성
const CommentsStateContext = createContext<Comments | undefined>(undefined);
const CommentsDispatchContext = createContext<CommentsDispatch | undefined>(
  undefined
);

// 2. 컨텍스트를 사용할 수 있도록 주입하는 컴포넌트 생성
export function MemosProvider({ children }: MemoProviderProps) {
  const [state, dispatch] = useReducer(commentsReducer, {});
  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
}

// 3. 컨텍스트를 사용할 수 있도록 커스텀 훅 생성
export function useCommentsState() {
  const context = useContext(CommentsStateContext);
  if (!context) throw new Error("CommentProvider not found");
  return context;
}
export function useCommentsDispatch() {
  const context = useContext(CommentsDispatchContext);
  if (!context) throw new Error("CommentProvider not found");
  return context;
}

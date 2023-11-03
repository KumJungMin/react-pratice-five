import { useReducer } from "react";

interface Memo {
  id: string;
  title: string;
  content: string;
}

interface MemoList {
  [key: string]: Memo[];
}

// 1. 초기값 지정하기
export const initMemoList = {};

interface IAction {
  type: string;
  memo: Memo;
}

// 2. 액션 만들기
export function reducer(state: MemoList, action: IAction): MemoList {
  switch (action.type) {
    case "ADD_MEMO":
      return addMemo(state, action.memo);
    case "REMOVE_MEMO":
      return removeMemo(state, action.memo.id);
    default:
      return state;
  }
}

function addMemo(MemoList: MemoList, newMemo: Memo) {
  const { id } = newMemo;
  const currentValue = MemoList[id];
  return {
    ...MemoList,
    [id]: currentValue ? [...currentValue, newMemo] : [newMemo],
  };
}

function removeMemo(MemoList: MemoList, id: string) {
  const currentValue = MemoList[id];
  return {
    ...MemoList,
    [id]: currentValue.filter((memo) => memo.id !== id),
  };
}

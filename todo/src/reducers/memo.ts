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
  memo?: Memo;
  id?: string;
  memoId?: string;
}

// 2. 액션 만들기
export function reducer(state: MemoList, action: IAction): MemoList {
  switch (action.type) {
    case "ADD_MEMO":
      if (!action.memo || !action.id) return state;
      else return addMemo(state, action.id, action.memo);
    case "REMOVE_MEMO":
      if (!action.id || !action.memoId) return state;
      else return removeMemo(state, action.id, action.memoId);
    default:
      return state;
  }
}

function addMemo(MemoList: MemoList, coinId: string, memo: Memo) {
  const currentValue = MemoList[coinId];

  const order = currentValue ? currentValue.length : 0;
  const newMemo = { ...memo, id: order + 1 + "" };
  return {
    ...MemoList,
    [coinId]: currentValue ? [...currentValue, newMemo] : [newMemo],
  };
}

function removeMemo(MemoList: MemoList, id: string, memoId: string) {
  const currentValue = MemoList[id];
  return {
    ...MemoList,
    [id]: currentValue.filter((memo) => memo.id !== memoId),
  };
}

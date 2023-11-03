import { useMemoDispatch } from "../contexts/memo";

interface MemoItemProps {
  // !!Memo를 별도 타입으로 분리
  memo: {
    title: string;
    content: string;
    id: string;
  };
  coinId: string;
}

function MemoItem({ memo, coinId }: MemoItemProps) {
  const dispatch = useMemoDispatch();

  function removeMemo() {
    dispatch({
      type: "REMOVE_MEMO",
      id: coinId,
      memoId: memo.id,
    });
  }

  return (
    <div>
      <span>{memo.title}</span>
      <span>{memo.content}</span>
      <button onClick={removeMemo}>삭제</button>
    </div>
  );
}

export default MemoItem;

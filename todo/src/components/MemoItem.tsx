import { useMemoDispatch } from "../contexts/memo";
import type { Memo } from "../types/memo";

import React from "react";

interface MemoItemProps {
  memo: Memo;
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

export default React.memo(MemoItem);

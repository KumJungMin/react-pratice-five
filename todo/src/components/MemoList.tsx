import { useMemoState } from "../contexts/memo";
import MemoItem from "./MemoItem";

interface MemoListProps {
  coinId: string;
}

function MemoList({ coinId }: MemoListProps) {
  const memoList = useMemoState();
  return (
    <div>
      {memoList[coinId]?.map((memo) => (
        <MemoItem
          key={memo.id}
          coinId={coinId}
          memo={memo}
        />
      ))}
    </div>
  );
}

export default MemoList;

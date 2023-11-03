// id를 받으면, 그 id값에 따라 vueQuery를 실행
import { useParams } from "react-router-dom";
import { useCoinInfo } from "../hooks/useCoin";

import CreateMemo from "../components/CreateMemo";
import MemoList from "../components/MemoList";

interface RouteParams {
  coinId: string;
}

function CoinInfo() {
  // useParams는 url의 파라미터를 가져온다.
  const { coinId } = useParams<RouteParams>();
  const { coinInfo, isCoinInfoLoading } = useCoinInfo(coinId);

  return (
    <>
      {isCoinInfoLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <span>코인 랭크: {coinInfo?.rank}</span>
          <CreateMemo coinId={coinId} />
          <MemoList coinId={coinId} />
        </>
      )}
    </>
  );
}

export default CoinInfo;

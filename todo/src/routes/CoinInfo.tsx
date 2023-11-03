// id를 받으면, 그 id값에 따라 vueQuery를 실행
import { useParams } from "react-router-dom";
import { useCoinInfo } from "../hooks/useCoin";

import CreateMemo from "../components/CreateMemo";

interface RouteParams {
  coinId: string;
}

function CoinInfo() {
  // useParams는 url의 파라미터를 가져온다.
  const { coinId } = useParams<RouteParams>();
  const { coinInfo, isCoinInfoLoading } = useCoinInfo(coinId);

  // 1. 메모 생성하기
  // 2. 메모 목록 보여주기
  // 3. => 메모 제거하기
  return (
    <>
      {isCoinInfoLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {coinInfo?.rank}
          <CreateMemo />
        </>
      )}
    </>
  );
}

export default CoinInfo;

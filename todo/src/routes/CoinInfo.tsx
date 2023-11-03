// id를 받으면, 그 id값에 따라 vueQuery를 실행
import { useParams } from "react-router-dom";
import { useCoinInfo } from "../hooks/useCoin";

interface RouteParams {
  coinId: string;
}

function CoinInfo() {
  // useParams는 url의 파라미터를 가져온다.
  const { coinId } = useParams<RouteParams>();
  const { coinInfo, isCoinInfoLoading } = useCoinInfo(coinId);

  return (
    <>{isCoinInfoLoading ? <div>Loading...</div> : <>{coinInfo?.rank}</>}</>
  );
}

export default CoinInfo;

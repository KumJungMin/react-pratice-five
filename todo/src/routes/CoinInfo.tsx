// id를 받으면, 그 id값에 따라 vueQuery를 실행
import { useParams } from "react-router-dom";
interface RouteParams {
  coinId: string;
}

function CoinInfo() {
  // useParams는 url의 파라미터를 가져온다.
  const { coinId } = useParams<RouteParams>();

  return <>{coinId}</>;
}

export default CoinInfo;

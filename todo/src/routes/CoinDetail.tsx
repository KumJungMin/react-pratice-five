import { useLocation } from "react-router-dom";

interface ILocationState {
  name: string;
  coinId: string;
}

function CoinDetail() {
  const { state: coin } = useLocation<ILocationState>();
  return (
    <div>
      <h1>Coin Detail</h1>
      <p>{coin.name}</p>
      <p>{coin.coinId}</p>
    </div>
  );
}

export default CoinDetail;

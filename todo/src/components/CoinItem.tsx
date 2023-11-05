import type { Coin } from "../hooks/useCoins";
import { Link } from "react-router-dom";

interface CoinItemProps {
  coin: Coin;
}

function CoinItem({ coin }: CoinItemProps) {
  return (
    <div>
      <h2>{coin.name}</h2>
      <p>{coin.symbol}</p>
      <Link to={`/${coin.id}`}>상세보기</Link>
    </div>
  );
}

export default CoinItem;

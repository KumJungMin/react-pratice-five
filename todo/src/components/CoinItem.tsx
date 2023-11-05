import type { Coin } from "../hooks/useCoins";

interface CoinItemProps {
  coin: Coin;
}

function CoinItem({ coin }: CoinItemProps) {
  return (
    <div>
      <h2>{coin.name}</h2>
      <p>{coin.symbol}</p>
    </div>
  );
}

export default CoinItem;

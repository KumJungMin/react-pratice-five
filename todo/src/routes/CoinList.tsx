import { useCoins } from "../hooks/useCoins";
import type { Coin } from "../hooks/useCoins";
import CoinItem from "../components/CoinItem";

function getSlicedData(data: Coin[]) {
  if (data) return data.slice(0, 10);
  else return [];
}

function CoinList() {
  const { data } = useCoins(getSlicedData);
  return (
    <>
      {data.map((coin: Coin) => {
        return (
          <CoinItem
            key={coin.id}
            coin={coin}
          />
        );
      })}
    </>
  );
}

export default CoinList;

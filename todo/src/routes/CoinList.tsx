import { useCoins } from "../hooks/useCoin";
import CoinItem from "../components/CoinItem";

function CoinList() {
  const { coins, isCoinsLoading } = useCoins();
  return (
    <>
      {isCoinsLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {coins.map((coin) => (
            <CoinItem
              key={coin.id}
              coin={coin}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default CoinList;

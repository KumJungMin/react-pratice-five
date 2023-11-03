import { useQuery } from "react-query";
import { fetchCoins, fetchCoinInfo } from "../apis/coin";

interface Coin {
  id: string;
  name: string;
  symbol: string;
}

export function useCoins() {
  const { data, isLoading } = useQuery<Coin[]>(["coins"], fetchCoins);
  return {
    coins: data,
    isCoinsLoading: isLoading,
  };
}

export function useCoinInfo(coinId: string) {
  const { data, isLoading } = useQuery<Coin>(["coinInfo", coinId], () =>
    fetchCoinInfo(coinId)
  );
  return {
    coinInfo: data,
    isCoinInfoLoading: isLoading,
  };
}

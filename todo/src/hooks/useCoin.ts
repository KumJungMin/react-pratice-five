import { useQuery } from "react-query";
import { fetchCoins, fetchCoinInfo } from "../apis/coin";
import type { Coin, CoinInfo } from "../types/coin";

export function useCoins(select?: (data: Coin[]) => Coin[]) {
  const { data = [], isLoading } = useQuery<Coin[]>(["coins"], fetchCoins, {
    select,
  });
  return {
    coins: data.slice(0, 20),
    isCoinsLoading: isLoading,
  };
}

export function useCoinInfo(coinId: string) {
  const { data = {}, isLoading } = useQuery<CoinInfo>(
    ["coinInfo", coinId],
    () => fetchCoinInfo(coinId)
  );
  return {
    coinInfo: data as CoinInfo,
    isCoinInfoLoading: isLoading,
  };
}

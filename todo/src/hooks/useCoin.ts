import { useQuery } from "react-query";
import { fetchCoins, fetchCoinInfo } from "../apis/coin";

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

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
  const { data, isLoading } = useQuery<Coin>(["coinInfo", coinId], () =>
    fetchCoinInfo(coinId)
  );
  return {
    coinInfo: data,
    isCoinInfoLoading: isLoading,
  };
}

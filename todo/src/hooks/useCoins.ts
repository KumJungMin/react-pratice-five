import { useQuery } from "react-query";
import { fetchCoins } from "../apis/coin";

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
type CoinSelect = (data: Coin[]) => Coin[];

export function useCoins(select?: CoinSelect) {
  const { data, isLoading } = useQuery<Coin[]>("coins", fetchCoins, { select });
  return { data, isLoading };
}

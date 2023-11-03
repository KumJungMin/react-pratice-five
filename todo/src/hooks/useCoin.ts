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

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
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
  const { data = {}, isLoading } = useQuery<InfoData>(
    ["coinInfo", coinId],
    () => fetchCoinInfo(coinId)
  );
  return {
    coinInfo: data as InfoData,
    isCoinInfoLoading: isLoading,
  };
}

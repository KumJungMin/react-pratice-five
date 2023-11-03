import type { Coin } from "../hooks/useCoin";
import React from "react";

interface CoinItemProps {
  coin: Coin;
}

// !!React.memo로 감싸주면 props가 변경되지 않는 한, 리렌더링을 하지 않는다.
// !!리스트의 데이터의 적은 경우, React.memo를 사용하면 성능을 최적화할 수 있다.

function CoinItem({ coin }: CoinItemProps) {
  return <div>{coin.name}</div>;
}

export default React.memo(CoinItem);

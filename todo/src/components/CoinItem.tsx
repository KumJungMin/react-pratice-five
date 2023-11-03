import type { Coin } from "../types/coin";
import React from "react";
import { Link } from "react-router-dom";

interface CoinItemProps {
  coin: Coin;
}

// !!React.memo로 감싸주면 props가 변경되지 않는 한, 리렌더링을 하지 않는다.
// !!리스트의 데이터의 적은 경우, React.memo를 사용하면 성능을 최적화할 수 있다.

function CoinItem({ coin }: CoinItemProps) {
  return (
    <div>
      <p>{coin.name}</p>
      {/* Link는 a태그와 비슷하다. */}
      {/* a태그와 다른 점은 Link는 페이지를 새로고침하지 않고 페이지를 이동시켜준다. */}
      {/* Link는 to라는 프로퍼티를 가진다. */}
      <Link to={`/${coin.id}`}>상세보기</Link>
    </div>
  );
}

export default React.memo(CoinItem);

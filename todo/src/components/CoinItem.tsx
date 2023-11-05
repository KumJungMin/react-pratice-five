import type { Coin } from "../hooks/useCoins";
import { useHistory } from "react-router-dom";

interface CoinItemProps {
  coin: Coin;
}

function CoinItem({ coin }: CoinItemProps) {
  const history = useHistory();
  // const navigate = useNavigate();  v6에서는 useHistory() 사용
  function navigateToDetails() {
    history.push({
      pathname: `/coin/${coin.id}`,
      state: { name: coin.name, coinId: coin.id },
    });
  }

  return (
    <div>
      <h2>{coin.name}</h2>
      <p>{coin.symbol}</p>

      {/* useLocation()으로 state 접근 가능 */}
      <button onClick={navigateToDetails}>상세보기</button>
    </div>
  );
}

export default CoinItem;

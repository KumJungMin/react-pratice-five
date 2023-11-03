interface CoinHeaderProps {
  name: string | undefined;
  symbol: string;
}

// !! 성능 향상 기점: name이 바뀐 경우에만 렌더링해야함
function CoinHeader({ name = "코인 화면", symbol }: CoinHeaderProps) {
  return (
    <header className="coin-header">
      <div className="coin-name">{name}</div>
      <div className="coin-symbol">{symbol}</div>
    </header>
  );
}

export default CoinHeader;

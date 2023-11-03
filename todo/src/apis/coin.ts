const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  const data = await fetch(`${BASE_URL}/coins`);
  return data.json();
}

export async function fetchCoinInfo(coinId: string) {
  const data = await fetch(`${BASE_URL}/coins/${coinId}`);
  return data.json();
}

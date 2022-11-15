const BASE_URL = "https://api.coinpaprika.com/v1";
const NOMARD_URL = "https://ohlcv-api.nomadcoders.workers.dev?coinId=";

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: String) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: String) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: String) {
  return fetch(`${NOMARD_URL}${coinId}`).then((response) => response.json());
}

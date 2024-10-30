export const fetchCoins = () => {
  return fetch(
    "https://raw.githubusercontent.com/Divjason/coindata/refs/heads/main/coins.json"
  ).then((response) => response.json());
};

export const fetchCoinInfo = (coinId: string | undefined) => {
  return fetch(
    `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  ).then((response) => response.json());
};

export const fetchCoinPrice = (coinId: string | undefined) => {
  return fetch(
    `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  ).then((response) => response.json());
};

export const fetchCoinHistory = (coinId: string | undefined) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}&start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
};

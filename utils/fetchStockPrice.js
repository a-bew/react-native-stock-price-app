const fetchStockPrice = async (stockTickerSymbol) => {
    const endpoint = "https://financialmodelingprep.com/api/v3/quote";
    const apiKey = "91b3a3f2d51f9d1cff1f2660fff9913a";
    const response = await fetch(`${endpoint}/${stockTickerSymbol.toUpperCase()}?apikey=${apiKey}`);
    const result = await response.json();
    const { name, price, change } = result[0];
    const changeType = change > 0 ? "+" : "-"
    return {
      stockName: name,
      stockPrice: price.toFixed(2),
      changeValue: change > 0 ? `+${change.toFixed(2)}` : change.toFixed(2),
      changeType: changeType
    }
  };
  export default fetchStockPrice;
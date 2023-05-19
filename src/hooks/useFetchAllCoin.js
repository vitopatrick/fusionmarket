import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchAllCoin = (coinName, time = 1) => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchAllCoins = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=${time}`
        );

        const dataChart = data.prices.map((value) => ({
          date: new Date(value[0]).toDateString(),
          price: value[1],
        }));

        setCoin(dataChart);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchAllCoins();

    return () => controller.abort();
  }, [coinName, time]);

  return { coin, loading, error, coinName };
};

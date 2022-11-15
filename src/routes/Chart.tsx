import { useQuery } from "@tanstack/react-query";
import { useOutletContext, useParams } from "react-router-dom";
import { fetchCoinHistory } from "./api";

interface coinInterface {
  coinId: string;
}
function Chart() {
  const coinId = useOutletContext<coinInterface>().coinId;
  const { isLoading, data } = useQuery(["", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(data);
  return <h1>hi</h1>;
}

export default Chart;

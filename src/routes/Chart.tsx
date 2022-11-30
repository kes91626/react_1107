import { useQuery } from "@tanstack/react-query";
import { useOutletContext, useParams } from "react-router-dom";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";
import Price from "./Price";

interface IdData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface coinInterface {
  coinId: string;
}
function Chart() {
  const coinId = useOutletContext<coinInterface>().coinId;
  const { isLoading, data } = useQuery<IdData[]>(["", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(data);
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "sales",
              data: data?.map((price) => price.close) as number[],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;

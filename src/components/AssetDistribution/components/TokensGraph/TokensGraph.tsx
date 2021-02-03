import React from "react";
import { PieChart } from "react-minimal-pie-chart";

type TokensGraphProps = {
  data?: Array<{
    title: string;
    value: number;
    color: string;
  }>;
};

const TokensGraph: React.FC<TokensGraphProps> = ({ data }) => {
  const defaultData = [
    { title: "Eth", value: 40, color: "#b2b2b2" },
    { title: "Usdt", value: 25, color: "#999999" },
    { title: "Sushi", value: 30, color: "#666666" },
  ];

  return (
    <div>
      <div className="flex justify-around">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-graph-100"></div>
          <span className="text-xs text-boulder-500 font-medium uppercase leading-none px-1">
            Eth
          </span>
        </div>

        <div className="flex items-center">
          <div className="w-2 h-2 bg-graph-200"></div>
          <span className="text-xs text-boulder-500 font-medium uppercase leading-none px-1">
            Usdt
          </span>
        </div>

        <div className="flex items-center">
          <div className="w-2 h-2 bg-graph-300"></div>
          <span className="text-xs text-boulder-500 font-medium uppercase leading-none px-1">
            Sushi
          </span>
        </div>
      </div>
      <PieChart
        lineWidth={65}
        paddingAngle={5}
        radius={45}
        data={data ? data : defaultData}
      />
    </div>
  );
};

export default TokensGraph;

import React from "react";
import SectionTitle from "components/SectionTitle";
import TokensGraph from "./components/TokensGraph";
import UserBalance from "./components/UserBalance";
import Separator from "components/Separator";

const AssetDistribution: React.FC = () => {
  return (
    <div className="container mx-auto px-11 mb-4 ">
      <SectionTitle text="Asset Distribution" />
      <Separator marginBottom="1rem" width="4rem" />

      <div className="flex flex-col md:flex-row justify-around items-center">
        <TokensGraph
          data={[
            { title: "Eth", value: 40, color: "#b2b2b2" },
            { title: "Usdt", value: 25, color: "#999999" },
            { title: "Sushi", value: 30, color: "#666666" },
          ]}
        />
        <UserBalance />
      </div>
    </div>
  );
};

export default AssetDistribution;

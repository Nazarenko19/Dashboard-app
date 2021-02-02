import React from "react";
import Header from "components/Header";
import AssetDistribution from "components/AssetDistribution";
import TokenBalances from "components/TokenBalances";
import Copyright from "components/Copyright";
import Separator from "components/Separator";

const DashboardPage: React.FC = () => {
  return (
    <>
      <Header />
      <Separator marginBottom="1.5rem" />
      <AssetDistribution />
      <TokenBalances />
      <Separator marginBottom="0.5rem" />
      <Copyright />
    </>
  );
};

export default DashboardPage;

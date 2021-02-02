import React from "react";
import SectionTitle from "components/SectionTitle";

type TokenBalancesProps = {
  test?: string;
};

const TokenBalances: React.FC<TokenBalancesProps> = () => {
  return (
    <div className="container mx-auto px-11 h-52">
      <SectionTitle text="Token Balances" />
      <div>Some info</div>
    </div>
  );
};

export default TokenBalances;

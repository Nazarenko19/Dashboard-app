import React from "react";
import SectionTitle from "components/SectionTitle";
import TableLayout from "./components/TableLayout";
import LockLayout from "./components/LockLayout";

type TokenBalancesProps = {
  test?: string;
};

const TokenBalances: React.FC<TokenBalancesProps> = () => {
  return (
    <div className="container mx-auto xl:px-80 px-1 mb-6">
      <SectionTitle text="Token Balances" />
      {1 ? <TableLayout /> : <LockLayout />}
    </div>
  );
};

export default TokenBalances;

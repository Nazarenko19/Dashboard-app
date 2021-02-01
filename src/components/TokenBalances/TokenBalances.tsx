import React from "react";

type TokenBalancesProps = {
  test?: string;
};

const TokenBalances: React.FC<TokenBalancesProps> = ({ test }) => {
  return <>{test && "tokenBalances"}</>;
};

export default TokenBalances;

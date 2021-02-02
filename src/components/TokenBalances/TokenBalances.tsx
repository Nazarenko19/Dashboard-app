import React from "react";
import SectionTitle from "components/SectionTitle";
import { ReactComponent as UnlockedSvg } from "icons/unlocked.svg";

type TokenBalancesProps = {
  test?: string;
};

const TokenBalances: React.FC<TokenBalancesProps> = () => {
  return (
    <div className="container mx-auto px-11 mb-6">
      <SectionTitle text="Token Balances" />
      <div className="flex flex-col justify-center items-center bg-boulder-200 p-5 h-72">
        <UnlockedSvg className='mb-8'/>
        <span className="text-lg text-graph-300 font-semibold px-1">
          Please, login to see your token balances
        </span>
      </div>
    </div>
  );
};

export default TokenBalances;

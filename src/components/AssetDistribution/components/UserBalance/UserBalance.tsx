import React from "react";
import { ReactComponent as EthSvg } from "icons/eth.svg";
import { ReactComponent as UsdSvg } from "icons/price-tag.svg";
import { ReactComponent as TokensSvg } from "icons/tokens.svg";

const UserBalance: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="border border-borderColor-default p-4 flex justify-between items-center xl:mb-10 mb-4">
        <div className="flex flex-col mr-8">
          <span className="text-sm text-boulder-500 font-medium uppercase px-1">
            Eth Balance
          </span>
          <span className="text-sm text-boulder-500 font-light uppercase px-1">
            21,35 Eth
          </span>
        </div>
        <EthSvg />
      </div>

      <div className="border border-borderColor-default p-4 flex justify-between items-center xl:mb-10 mb-4">
        <div className="flex flex-col mr-10">
          <span className="text-sm text-boulder-500 font-medium uppercase px-1">
            Total usd
          </span>
          <span className="text-sm text-boulder-500 font-light uppercase px-1">
            $ 211 324
          </span>
        </div>
        <UsdSvg />
      </div>

      <div className="border border-borderColor-default p-4 flex justify-between items-center">
        <div className="flex flex-col mr-10">
          <span className="text-base text-boulder-500 font-medium uppercase px-1">
            Total Tokens
          </span>
          <span className="text-sm text-boulder-500 font-normal uppercase px-1">
            123
          </span>
        </div>

        <TokensSvg />
      </div>
    </div>
  );
};

export default UserBalance;

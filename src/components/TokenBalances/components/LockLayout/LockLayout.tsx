import React from "react";
import { ReactComponent as UnlockedSvg } from "icons/unlocked.svg";

const LockLayout: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-boulder-200 p-5 h-lock">
      <UnlockedSvg className="mb-8" />
      <span className="text-lg text-graph-300 font-semibold px-1 text-center">
        Please, login to see your token balances
      </span>
    </div>
  );
};

export default LockLayout;

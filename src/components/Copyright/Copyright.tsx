import React from "react";
import { ReactComponent as CopyrightSvg } from "icons/copyright.svg";

const Copyright: React.FC = () => {
  return (
    <div className="container mx-auto flex items-center">
      <CopyrightSvg />
      <p className="ml-1 text-1xs text-boulder-500 font-normal">
        Quick Dashboard
      </p>
    </div>
  );
};

export default Copyright;

import React from "react";
import { ReactComponent as LogoSvg } from "icons/logo.svg";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center p-2">
      <LogoSvg className="mr-2" />
      <p className="text-sm text-boulder-500 font-medium uppercase">Quick Dashboard</p>
    </div>
  );
};

export default Logo;

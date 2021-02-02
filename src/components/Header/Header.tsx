import React from "react";
import Logo from "./components/Logo";
import UserProfile from "./components/UserProfile";

const Header: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <Logo />
        <UserProfile />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Logo from "./components/Logo";
import UserProfile from "./components/UserProfile";

const Header: React.FC = () => {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <Logo />
      <UserProfile />
    </div>
  );
};

export default Header;

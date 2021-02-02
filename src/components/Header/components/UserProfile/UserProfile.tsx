import React from "react";
import { ReactComponent as UserSvg } from "icons/user.svg";

const UserProfile: React.FC = () => {
  return (
    <div className="flex items-center p-2">
      <p className="mr-2 text-xs text-boulder-500 font-normal">Login</p>
      <div className="flex items-center justify-center border-solid border border-boulder-500 rounded-full p-2 w-8 h-8">
        <UserSvg />
      </div>
    </div>
  );
};

export default UserProfile;

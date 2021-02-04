import React, { useState } from "react";
import { ReactComponent as UserSvg } from "icons/user.svg";
import ModalWindow from "components/ModalWindow";

const UserProfile: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalWindow open={open} onClose={() => setOpen(false)} />

      <button onClick={() => setOpen(true)} className="flex items-center p-2 focus:outline-none transition duration-500 ease-in-out transform hover:bg-boulder-100 rounded-xl">
        <span className="mr-2 text-sm text-boulder-500 font-light">Login</span>
        <div className="flex items-center justify-center border-solid border border-boulder-500 rounded-full p-2 w-8 h-8">
          <UserSvg />
        </div>
      </button>
    </>
  );
};

export default UserProfile;

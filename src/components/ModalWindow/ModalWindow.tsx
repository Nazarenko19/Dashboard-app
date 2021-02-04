import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ReactComponent as FoxSvg } from "icons/metamask-fox.svg";

type ModalWindowProps = {
  open: boolean;
  onClose: () => void;
};

const ModalWindow: React.FC<ModalWindowProps> = ({ open, onClose }) => {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="flex items-center justify-center"
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="w-96 bg-boulder-200 flex flex-col justify-center items-center p-5 focus:outline-none rounded-xl">
            <FoxSvg className="mb-5" />
            <button className="text-lg text-boulder-600 font-medium uppercase p-2 focus:outline-none transition duration-700 ease-in-out transform hover:bg-boulder-100 rounded-xl">
              Connect via MetaMask
            </button>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalWindow;

import React from "react";
import svgArt from "../../assets/svg-art.svg";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";

function LoginModal({ openModal, setOpenModal }) {
  const navigate = useNavigate();

  return (
    <div>
      <ReactModal
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" } }}
        className="border-white-1 bg-white font-poppins rounded-lg relative inset-1/2 transform -translate-x-2/4 -translate-y-1/2 w-3/4"
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
      >
        <div className="flex flex-col items-center pb-6 pt-3 text-center px-4">
          <img className="mt-2 mb-3 w-60" src={svgArt} alt="art" />
          <p className="text-3xl text-black-1 font-medium">Hello !</p>
          <p className="text-base text-gray-1 mt-3">
            Sign Up with us or Login to your account
          </p>
          <div className="flex justfy-between mt-4">
            <button
              className="border border-white-2 transition-all px-7 py-2 rounded-sm text-gray-1 mr-4 hover:text-black-1 hover:border-black-1"
              onClick={() => {
                setOpenModal(false);
                navigate("/login");
              }}
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-primary-red transition-all px-7 py-2 rounded-sm text-white hover:opacity-80"
            >
              Sign Up
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default LoginModal;

import React from "react";
import { CgDanger } from "react-icons/cg";
import ReactModal from "react-modal";
import Loader from "react-loader-spinner";

function DeleteModal({
  openModal,
  setOpenModal,
  deletePlaylistId,
  deleteMutate,
  playlistDeleteLoading
}) {
  return (
    <div>
      <ReactModal
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" } }}
        className="border-white-1 bg-white font-poppins rounded relative inset-1/2 transform -translate-x-2/4 -translate-y-1/2 w-3/4"
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
      >
        {playlistDeleteLoading && (
          <div>
            <div className="absolute bg-white bg-opacity-50 inset-0"></div>
            <Loader
              type="TailSpin"
              color="black"
              height={50}
              width={50}
              className="text-black absolute z-20 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
            />
          </div>
        )}
        <div className="flex flex-col items-center pb-6 pt-3 text-center px-4">
          <CgDanger className="text-8xl text-red-500 mb-3" />
          <p className="text-2xl text-black-2">Are you sure ?</p>
          <p className="text-base text-gray-1 mt-3">
            Do you really want to delete this playlist ?
          </p>
          <div className="flex justfy-between mt-4">
            <button
              className="border border-white-2 transition-all px-7 py-2 rounded-sm text-gray-1 mr-4 hover:text-black-1 hover:border-black-1"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
            <button
              className="bg-primary-red transition-all px-7 py-2 rounded-sm text-white hover:opacity-80"
              onClick={() => deleteMutate(deletePlaylistId)}
            >
              Delete
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default DeleteModal;

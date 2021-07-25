import ReactModal from "react-modal";
import { useState, useEffect } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";

ReactModal.setAppElement("#root");

function ShareModal({ openShareModal, setOpenShareModal, location }) {
  const [locationUrl, setLocationUrl] = useState("");

  useEffect(() => {
    setLocationUrl(`https://vidjam.netlify.app${location}`);
  }, [location]);

  return (
    <div>
      <ReactModal
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" } }}
        className="border border-white-1 bg-white font-poppins rounded relative inset-1/2 transform -translate-x-2/4 -translate-y-1/2 w-3/4"
        isOpen={openShareModal}
        onRequestClose={() => setOpenShareModal(false)}
      >
        <div className="py-2">
          <div className="flex items-center px-2.5 pb-2 border-b border-white-1">
            <AiOutlineShareAlt className="text-2xl text-primary-red mr-2" />
            <p className="text-black-1 text-lg">Share via URL</p>
          </div>
          <CopyToClipboard text={locationUrl}>
            <button
              onClick={() => toast.success("Copied to clipboard")}
              className="flex items-center m-2.5 bg-gray-200 rounded-sm text-left cursor-pointer hover:opacity-80"
            >
              <p className="border-r border-white-2 text-gray-1 text-xs mr-2 px-3 py-2 flex flex-col items-center">
                <MdContentCopy className="text-2xl" />
              </p>
              <p className="text-sm text-blue-800 p-2">{`https://vidjam.netlify.app${location}`}</p>
            </button>
          </CopyToClipboard>
        </div>
      </ReactModal>
    </div>
  );
}

export default ShareModal;

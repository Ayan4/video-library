import { useEffect, useState, useRef } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { useTheme } from "../../context/themeContext";

function DeleteHandler({ handleDelete }) {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const deleteRef = useRef(null);

  useEffect(() => {
    const handleDropdown = e => {
      if (!deleteRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleDropdown);
    return () => document.removeEventListener("mousedown", handleDropdown);
  });

  return (
    <div
      onClick={e => {
        e.preventDefault();
        setOpen(!open);
      }}
      ref={deleteRef}
      className="relative ml-auto font-poppins"
    >
      <div
        className={`rounded-full p-0.5 cursor-pointer ${
          theme
            ? "hover:bg-dark-bor lg:hover:bg-dark-bor"
            : "hover:bg-white-1 lg:hover:bg-white-2"
        }`}
      >
        <BiDotsVerticalRounded
          className={`text-lg ${theme ? "text-white-2" : "text-black-2"}`}
        />
      </div>
      {open && (
        <div
          className="bg-white-1 lg:bg-white flex items-center text-gray-1 mt-1 px-1 py-1 border border-white-2 absolute right-0 cursor-pointer rounded hover:bg-opacity-70"
          onClick={handleDelete}
        >
          <BiTrash className="text-lg mr-1 mb-0.5" />
          <p className="text-sm">Delete</p>
        </div>
      )}
    </div>
  );
}

export default DeleteHandler;

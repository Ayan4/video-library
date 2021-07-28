import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Categories() {
  const { user } = useAuth();

  return (
    <div
      style={{ zIndex: "100", top: "4rem" }}
      className={`w-full border-b sticky bg-white border-white-1 py-3 px-5 lg:py-4 ${user &&
        "border-t border-white-1"}`}
    >
      <Link className="mr-2" to="/">
        <p className="text-white text-sm bg-black-1 py-1 lg:py-1.5 px-4 lg:px-4 rounded-xl font-poppins inline-block">
          All
        </p>
      </Link>
      <Link className="mr-2" to="/">
        <p className="text-black-2 text-sm bg-white-1 py-1 lg:py-1.5 px-4 lg:px-4 rounded-xl font-poppins inline-block">
          Camping
        </p>
      </Link>
      <Link className="mr-2" to="/">
        <p className="text-black-2 text-sm bg-white-1 py-1 lg:py-1.5 px-4 lg:px-4 rounded-xl font-poppins inline-block">
          Hiking
        </p>
      </Link>
    </div>
  );
}

export default Categories;

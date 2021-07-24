import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="w-full mt-5 px-5">
      <Link className="mr-2" to="/">
        <p className="text-white border border-black-2 text-sm bg-black-2 py-1 px-4 rounded-xl font-poppins inline-block">
          All
        </p>
      </Link>
      <Link className="mr-2" to="/">
        <p className="text-black-2 text-sm border border-black-2 py-1 px-4 rounded-xl font-poppins inline-block">
          Camping
        </p>
      </Link>
      <Link className="mr-2" to="/">
        <p className="text-black-2 text-sm border border-black-2 py-1 px-4 rounded-xl font-poppins inline-block">
          Hiking
        </p>
      </Link>
    </div>
  );
}

export default Categories;

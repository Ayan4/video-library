import React from "react";
import { Link } from "react-router-dom";

function LoginPopup() {
  return (
    <div className="flex flex-col items-center m-8 py-6 border border-primary bg-yellow-50 rounded-md">
      <p className="text-black-1 font-medium text-lg mb-5">
        Login to See Your Liked Videos
      </p>
      <Link className="" to="/login">
        <button className="py-2 px-8 border-2 border-primary text-primary-red font-medium">
          Login
        </button>
      </Link>
    </div>
  );
}

export default LoginPopup;

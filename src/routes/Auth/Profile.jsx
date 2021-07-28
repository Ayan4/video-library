import React from "react";
import { useAuth } from "../../context/authContext";
import Sidebar from "../../components/Navbar/Sidebar";
import { AiOutlineUser } from "react-icons/ai";

function Profile() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex">
      <div className="w-1/5 hidden lg:block">
        <Sidebar />
      </div>

      <div className="w-full lg:w-4/5">
        <div className="px-5 py-4 border-b border-white-1 flex justify-between items-center">
          <h1 className="font-medium mb-1.5 text-black-1 text-lg border-l-4 border-primary pl-2.5">
            Account
          </h1>
          <AiOutlineUser className="text-3xl text-black-2" />
        </div>

        <div className="w-full flex font-poppins flex-col items-center p-8">
          <img
            className="rounded-full w-40 h-40 mt-0.5 mb-6 border border-white-2"
            src="https://media.istockphoto.com/vectors/missing-image-of-a-person-placeholder-vector-id1288129985?k=6&m=1288129985&s=612x612&w=0&h=V3wDE1mcLUtlaLUi4yeEp9civuxgB4RA60JehnQdaOY="
            alt=""
          />
          <p className="text-lg">{user.name}</p>
          <button
            className="px-10 py-2 max-w-xs bg-black text-white my-6"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

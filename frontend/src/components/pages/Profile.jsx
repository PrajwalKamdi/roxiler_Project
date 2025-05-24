import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigation = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    setTimeout(() => {
    navigation("/");
    }, 1000);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-700/90 shadow-sm shadow-gray-100 rounded-2xl lg:p-8 px-4 py-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-100 font-semibold mb-2">Name</label>
          <input
            type="text"
            value={localStorage.getItem("username")}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-100 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            value={ localStorage.getItem("email")}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 focus:outline-none"
          />
        </div>
         <div className="mb-6">
          <label className="block text-gray-100 font-semibold mb-2">
            Role
          </label>
          <input
            type="email"
            value={localStorage.getItem('role')}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          <button onClick={handleLogout} className="cursor-pointer bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white py-2 rounded-lg  font-semibold hover:from-blue-800 hover:to-blue-500 transition">
            Logout
          </button>
          <Link to={"forgot-password"} className="cursor-pointer text-sky-600 hover:underline font-medium">
            Forgot Password / Change Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

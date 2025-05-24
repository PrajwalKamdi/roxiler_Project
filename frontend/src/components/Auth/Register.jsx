import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { isSuccess, isWarn } from "../toast/Toast";
const Register = ({ name }) => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_API_BACKEND;

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/api/register`, formData);

      isSuccess(response.data.message);
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      isWarn(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="p-5 md:p-0 flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-700">
      <h1 className="mt-4 mb-4">
        <span className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          {name} Registration{" "}
        </span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-700/90 p-8 rounded-xl shadow-2xl w-full max-w-md border border-indigo-200 mb-5"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-300 drop-shadow">
          Registration Form
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-100"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-indigo-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/80 text-gray-900"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-100"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-indigo-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/80 text-gray-900"
            placeholder="Your Address"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-100"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-indigo-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/80 text-gray-900"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-100"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-indigo-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/80 text-gray-900"
            placeholder="Password"
          />
          <div className="mt-2 text-sm text-gray-400">
            <p className="">Password Should Be</p>
            <ul className="list-disc pl-5 space-y-1 ">
              <li>At least 8 characters long</li>
              <li >Must include one uppercase letter</li>
              <li>Must include one lower case letter</li>
              <li>Must include one number</li>
              <li>Must include one special character</li>
            </ul>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-100"
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-indigo-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/80 text-gray-900"
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="owner">Owner</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-700 text-white py-2 px-4 rounded-md hover:from-indigo-800 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg"
        >
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;

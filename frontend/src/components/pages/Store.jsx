import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { isError, isSuccess } from "../toast/Toast";
import axios from "axios";
const Store = () => {
  const [formData, setFormData] = useState({
    store_name: "",
    email: "",
    address: "",
  });
  const url = import.meta.env.VITE_API_BACKEND;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/add-store`, formData);
      isSuccess(response.data.message);
    } catch (error) {
      isError(error.response.data.message);
    }
    setFormData({
      store_name: "",
      email: "",
      address: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-700/90 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700"
      >
        <h2 className="text-3xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
          Store Form
        </h2>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-200 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="store_name"
            value={formData.store_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 placeholder-gray-400"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-200 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 placeholder-gray-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="address"
            className="block text-gray-200 font-semibold mb-2"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 placeholder-gray-400"
            placeholder="Enter your address"
            rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 text-white py-2 px-4 rounded-lg hover:from-blue-800 hover:via-purple-800 hover:to-indigo-500 transition duration-200 font-semibold shadow-lg"
        >
          Submit
        </button>
      </form>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Store;

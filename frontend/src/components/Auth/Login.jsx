import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { isError, isSuccess } from "../toast/Toast";
import { ToastContainer } from "react-toastify";
import { jwtDecode } from "jwt-decode";
const Login = () => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_API_BACKEND;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [role, setRole] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/login`, formData);
        localStorage.setItem("token", response.data.token);
        const token = localStorage.getItem("token");
        const decode = jwtDecode(token);
       
        localStorage.setItem("role", decode.role);
        localStorage.setItem("username", decode.username);
        localStorage.setItem("email", decode.email);
        localStorage.setItem("isLoggedIn", true);
      isSuccess(response.data.message);
      setFormData({
        email: "",
        password: "",
      });
      setTimeout(() => {
        navigate('/home')
      }, 1000);
    } catch (error) {
      isError(error.response.data.message);
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex bg-gray-200 items-center justify-center min-h-screen p-5 md:p-0">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl  font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 shadow-lg  rounded-lg border text-sm md:text-base"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-lg text-sm md:text-base"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
          >
            Login
          </button>
          <div className="flex gap-2 text-sm">
            <p className="text-sm md:text-base">Don't have account?</p>
            <Link
              to="/register"
              className="text-sky-700 underline underline-offset-2"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

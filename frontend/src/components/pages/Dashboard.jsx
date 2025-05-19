import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const url = import.meta.env.VITE_API_BACKEND;
  const [userCount, setUserCount] = useState(0);
  const [storeCount, setStoreCount] = useState(0);
  const handleAPi = async () => {
    const response = await axios.get(`${url}/api/stores`);
    const res = await axios.get(`${url}/api/users`);
    console.log(response.data.length);
    console.log(res.data.result.length)
    // console.log(res.data.result);
    setUserCount(res.data.result.length);
    setStoreCount(response.data.length);
  }
  useEffect(() => {
    handleAPi();
  }, []);
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        {/* <Sidebar/> */}
      
      {/* Main Content */}
      <div className="flex-1 p-6 space-y-5">
        <div className="text-gray-200">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
          <p className="mt-4 text-gray-200">
            Select an option from the sidebar to get started.
          </p>
        </div>
        <div className="flex gap-10">
          <div className="p-5 shadow bg-gray-200 shadow-gray-300 w-1/3 flex flex-col">
            <strong className="text-gray-700">Total Users</strong>
            <strong className="text-blue-500 text-xl">{userCount}</strong>
          </div>
          <div className="p-5 shadow bg-gray-200 shadow-gray-300 w-1/3 flex flex-col">
            <strong className="text-gray-700">Total Store</strong>
            <strong className="text-green-500 text-xl">{storeCount}</strong>
          </div>
          <div className="p-5 shadow bg-gray-200 shadow-gray-300 w-1/3 flex flex-col">
            <strong className="text-gray-700">Total Rating</strong>
            <strong className="text-purple-500 text-xl">100</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

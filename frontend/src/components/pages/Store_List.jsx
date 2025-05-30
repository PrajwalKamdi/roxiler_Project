import React, { useEffect, useState } from "react";
import axios from "axios";

const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = import.meta.env.VITE_API_BACKEND;
  const fetchStores = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${url}/api/store_rating`, {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      }); // Replace with your API endpoint
      setStores(response.data.data);
     
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch stores");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchStores();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex justify-center items-center text-center text-3xl font-semibold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-2xl min-h-screen mt-10 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-300">
        Store List
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 bg-opacity-90 border border-gray-700 shadow-lg rounded-lg text-xs sm:text-sm">
          <thead>
            <tr className="border">
              <th className="px-2 sm:px-4 py-2 border bg-gradient-to-r from-purple-700 to-blue-700 text-white whitespace-nowrap">Name</th>
              <th className="px-2 sm:px-4 py-2 border bg-gradient-to-r from-blue-700 to-teal-700 text-white whitespace-nowrap">Email</th>
              <th className="px-2 sm:px-4 py-2 border bg-gradient-to-r from-teal-700 to-gray-700 text-white whitespace-nowrap">Address</th>
              <th className="px-2 sm:px-4 py-2 border bg-gradient-to-r from-gray-700 to-purple-700 text-white whitespace-nowrap">Rating</th>
            </tr>
          </thead>
          <tbody className="text-gray-200 font-semibold">
            {stores.map((store, index) => (
              <tr
                key={index}
                className="text-center hover:bg-gradient-to-r hover:from-gray-700 hover:to-blue-800 transition"
              >
                <td className="px-2 sm:px-4 py-2 border-b border-r border-l break-words max-w-xs">{store.store_name}</td>
                <td className="px-2 sm:px-4 py-2 border-b border-r border-l break-words max-w-xs">{store.email}</td>
                <td className="px-2 sm:px-4 py-2 border-b border-r border-l break-words max-w-xs">{store.address}</td>
                <td className="px-2 sm:px-4 py-2 border">{(+ store.avg_rating).toFixed(1)} <span className="text-yellow-400">&#9733;</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreList;

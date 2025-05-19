import React, { useEffect, useState } from "react";
import axios from "axios";

const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = import.meta.env.VITE_API_BACKEND;
  const fetchStores = async () => {
    try {
      const response = await axios.get(`${url}/api/stores`); // Replace with your API endpoint
      setStores(response.data);
      console.log(response.data);
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
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <h1 className="text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-300">
        Store List
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 bg-opacity-90 border border-gray-700 shadow-lg rounded-lg">
          <thead>
            <tr className="border">
              <th className="px-4 py-2 border bg-gradient-to-r from-purple-700 to-blue-700 text-white">Name</th>
              <th className="px-4 py-2 border bg-gradient-to-r from-blue-700 to-teal-700 text-white">Email</th>
              <th className="px-4 py-2 border bg-gradient-to-r from-teal-700 to-gray-700 text-white">Address</th>
              <th className="px-4 py-2 border bg-gradient-to-r from-gray-700 to-purple-700 text-white">Rating</th>
            </tr>
          </thead>
          <tbody className="text-gray-200 text-sm font-semibold">
            {stores.map((store, index) => (
              <tr
                key={index}
                className="text-center hover:bg-gradient-to-r hover:from-gray-700 hover:to-blue-800 transition"
              >
                <td className="px-4 py-2 border-b border-r border-l">{store.store_name}</td>
                <td className="px-4 py-2 border-b border-r border-l">{store.email}</td>
                <td className="px-4 py-2 border-b border-r border-l">{store.address}</td>
                <td className="px-4 py-2 border">{store.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreList;

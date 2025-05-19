import axios from "axios";
import React, { useEffect } from "react";
import { isError } from "../toast/Toast";
import { Link } from "react-router-dom";

const Store_user = () => {
  const url = import.meta.env.VITE_API_BACKEND;
  const [stores, setStores] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const handleReview = async (store_id) => {
    try {
      const response = await axios.post(`${url}/api/store/rating`, formData);
      
    } catch (error) {
      
    }
  }
  const handleFetch = async () => {
    try {
      const response = await axios.get(`${url}/api/stores`);
      const res = await axios.get(`${url}/api/store`);
      setStores(response.data);
      console.log(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching stores:", error);
      isError(error.response.data.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <div>
      <div className="p-6 min-h-screen grid grid-cols-3 gap-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        {stores.map((store, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg shadow-lg p-4 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-700"
          >
            <Link to={`/home/store/${store?.store_id}`}>
             <div className="mb-2">
              <span className="text-gray-300 font-semibold">Store Name: </span>
              <span className="text-blue-400 text-lg">{store.store_name}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-300 font-semibold">Email: </span>
              <span className="text-purple-400 text-lg">{store.email}</span>
            </div>
            <div>
              <span className="text-gray-300 font-semibold">Address: </span>
              <span className="text-gray-200 text-lg">{store.address}</span>
            </div>
            </Link>
          </div>
          
           
        ))}
      </div>
    </div>
  );
};

export default Store_user;

import axios from "axios";
import React, { useEffect } from "react";
import { isError } from "../toast/Toast";
import { Link } from "react-router-dom";
import { LuLoaderCircle } from "react-icons/lu";
const Store_user = () => {
  const url = import.meta.env.VITE_API_BACKEND;
  const [stores, setStores] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState("");
  const handleFetch = async () => {
    try {
      const res = await axios.get(`${url}/api/store_rating`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setStores(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // isError(error.response.data.message);
      setErr("Error fetching stores: " + error.message);
    }
  };
  useEffect(() => {
    handleFetch();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-200">
        
          <LuLoaderCircle size={50} className="animate-spin " color="" />

      </div>
    );
  }
   if (err) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-200 ">
        
          <h1 className="text-red-400 text-3xl border border-red-400 px-10 py-5 rounded-md">{err}</h1>

      </div>
    );
  }
  return (
    <div>
      <div className="p-4 sm:p-6 min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        {stores.map((store, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg shadow-lg p-4 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-700 "
          >
            <Link to={`/home/store/${store?.store_id}`}>
              <div className="mb-2">
                <h1 className="text-3xl w-full font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {store.store_name}
                </h1>
              </div>
              <div className="mb-2">
                <span className="text-gray-300 font-semibold">Email: </span>
                <span className="text-purple-400 ">{store.email}</span>
              </div>
              <div>
                <span className="text-gray-300 font-semibold">Address: </span>
                <span className="text-gray-200 ">{store.address}</span>
              </div>
              <div>
                <span className="text-gray-300 font-semibold">Rating: </span>
                <span className="text-gray-200 text-md">
                  {(+store.avg_rating || 0).toFixed(1)}
                  <span className="text-yellow-400 ml-1">&#9733;</span>
                </span>
              </div>
              <div className="mb-2 text-gray-200">
                <span>Total Reviews: {store.review_count}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store_user;

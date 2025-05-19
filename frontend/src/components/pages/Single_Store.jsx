import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const Single_Store = () => {
  const { store_id } = useParams();
  const url = import.meta.env.VITE_API_BACKEND;
  const [store, setStore] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState("");
  const [storeRating, setStoreRating] = React.useState({
    store_id: store_id,
    user_name: localStorage.getItem("user_name"),
    rating: 0,
    review: "",
  });

  const fetchStore = async () => {
    try {
      const response = await axios.get(`${url}/api/store/${store_id}`); // Replace with your API endpoint
      setStore(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching store:", error);
      setLoading(false);
      setErr("Error fetching store:", error);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${url}/api/store/rating`,
        storeRating
      );
      console.log(response.data);
      console.log(storeRating);
      setStoreRating({
        ...storeRating,
        review: "",
        rating: 0,
      });
      alert("Review submitted successfully");
    }
    catch (error) {
      console.error("Error submitting review:", error);
      setErr("Error submitting review:", error);
    }
  };
  useEffect(() => {
    fetchStore();
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-10 max-w-lg w-full text-white border border-gray-700">
        {loading ? (
          <div className="text-center text-lg font-semibold">Loading...</div>
        ) : err ? (
          <div className="text-center text-red-400">{err}</div>
        ) : (
          <>
            <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {store.store_name || "Store Name"}
            </h1>
            <div className="mb-4">
              <p className="mb-2 text-gray-300">
                <span className="font-semibold text-indigo-400">Location:</span>{" "}
                {store.address || "N/A"}
              </p>
              <p className="mb-2 text-gray-300">
                <span className="font-semibold text-indigo-400">Owner:</span>{" "}
                {store.owner || "N/A"}
              </p>
              <p className="mb-2 text-gray-300">
                <span className="font-semibold text-indigo-400">Email:</span>{" "}
                {store.email || "No email available."}
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="font-semibold text-indigo-400 block mb-1">
                  Review:
                </label>
                <textarea
                  className="border border-gray-600 bg-gray-800 rounded-md text-sm w-full px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                  placeholder="Write your review..."
                  value={storeRating.review}
                  onChange={(e) =>
                    setStoreRating({
                      ...storeRating,
                      review: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="rating"
                  className="font-semibold text-indigo-400 block mb-1"
                >
                  Rating:
                </label>
                <select
                  name="rating"
                  id="rating"
                  className="border border-gray-600 bg-gray-800 rounded-md text-sm w-full px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={storeRating.rating}
                  onChange={(e) =>
                    setStoreRating({
                      ...storeRating,
                      rating: e.target.value,
                    })
                  }
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <button className="mt-4 border border-gray-600 bg-gray-800 rounded-md text-sm w-full px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:cursor-pointer hover:bg-gray-700 hover:transition duration-300">
                Submit Review
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Single_Store;

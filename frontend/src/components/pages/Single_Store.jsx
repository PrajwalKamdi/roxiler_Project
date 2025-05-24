import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { isError, isSuccess } from "../toast/Toast";
import { ToastContainer } from "react-toastify";
const Single_Store = () => {
  const { store_id } = useParams();
  const url = import.meta.env.VITE_API_BACKEND;
  const [store, setStore] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState("");
  const [storeRating, setStoreRating] = React.useState({
    store_id: store_id,
    user_name: localStorage.getItem("username"),
    rating: 0,
    review: "",
  });

  const fetchStore = async () => {
    try {
      const response = await axios.get(`${url}/api/store/${store_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }); // Replace with your API endpoint
      setStore(response.data);
      setLoading(false);
    } catch (error) {
    
      setLoading(false);
      setErr("Error fetching store:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${url}/api/store/rating`,
        storeRating,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
     
      isSuccess("Review submitted successfully");
      setStoreRating({
        ...storeRating,
        review: "",
        rating: 0,
      });

      setShow(!show);
    } catch (error) {
     
      setErr("Error submitting review:", error);
      isError("Error submitting review:", error);
    }
  };
  const [show, setShow] = React.useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    fetchStore();
  }, []);
  return (
    <div className="px-1 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 w-full">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-10 max-w-lg w-full text-white border border-gray-700">
        {loading ? (
          <div className="text-center text-lg font-semibold">Loading...</div>
        ) : err ? (
          <div className="text-center text-red-400">{err}</div>
        ) : (
          <>
            <h1 className="text-5xl md:text-6xl w-full font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
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
            <div className={`${show ? "hidden" : "block"}`}>
              <button
                className="bg-violet-700 rounded-md px-5 py-3 hover:bg-violet-900 hover:transition-colors duration-500"
                onClick={handleShow}
              >
                Rate & Review{" "}
              </button>
            </div>
            <div className={`${show ? "block" : "hidden"}`}>
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
                    required
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
                    required
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
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Single_Store;

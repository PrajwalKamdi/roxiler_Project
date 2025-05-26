import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isError, isSuccess } from "../toast/Toast";
import { ToastContainer } from "react-toastify";
import { LuLoaderCircle } from "react-icons/lu";
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
  const [reviews, setReviews] = useState([]);
  const fetchStore = async () => {
    try {
      const response = await axios.get(`${url}/api/store/${store_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const res = await axios.get(`${url}/api/store_reviews/${store_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setStore(response.data);
      setReviews(res.data.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErr("Error fetching store");
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
    fetchStore();
  };
  const [show, setShow] = React.useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    fetchStore();
  }, []);
  const StoreLayout = () => {
    return (
      <div className="">
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
                <option value="0" disabled>
                  Select Rating
                </option>
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
      </div>
    );
  };

  function getStars(rating) {
    const filled = "★".repeat(rating);
    const empty = "☆".repeat(5 - rating);
    return filled + empty;
  }
  const ReviewLayout = () => {
    return (
      <div className="mt-10 w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <ul className="list-disc  pl-5 text-gray-300">
          <h1 className="text-2xl font-bold mb-4 text-white">Reviews</h1>
          {reviews.map((review, index) => (
            <li key={index} className="mb-4 p-4  rounded-md shadow-xl bg-gray-700">
              <span className="text-yellow-400">{getStars(review.rating)}</span>
              <h2 className=" font-bold text-md">
                {(review.user_name === null && "Anonymous") || review.user_name}
              </h2>
              <p className="mb-1">{review.review}</p>
              <p className="text-sm">{review.rating_date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
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
    <div className="px-1 py-10 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 w-full">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-10 max-w-lg w-full text-white border border-gray-700">
        <StoreLayout />
      </div>
      <ReviewLayout />
      <ToastContainer />
    </div>
  );
};

export default Single_Store;

import axios from "axios";
import { useEffect, useState } from "react";
import { FaComments, FaStar, FaStore } from "react-icons/fa";

const Dashboard = () => {
  const url = import.meta.env.VITE_API_BACKEND;
  const [userCount, setUserCount] = useState(0);
  const [storeCount, setStoreCount] = useState([]);
  const [storeRating, setStoreRating] = useState(0);
  const handleAPi = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${url}/api/stores`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const res = await axios.get(`${url}/api/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const ress = await axios.get(`${url}/api/store_rating`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const rating_count = ress.data.data.reduce(
      (pre, store) => pre + store.review_count,
      0
    );
    setUserCount(res.data.result.length);
    setStoreCount(response.data);
    setStoreRating(rating_count);
  };
  useEffect(() => {
    handleAPi();
  }, []);
  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div
      className={`flex items-center p-4 rounded-xl shadow-lg text-white ${color}`}
    >
      <div className="text-3xl mr-4">
        <Icon />
      </div>
      <div>
        <div className="text-lg font-bold">{value}</div>
        <div className="text-sm">{label}</div>
      </div>
    </div>
  );

  const StoreCard = () => {
    return (
      <>
        <div className="p-4 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-200">Store Overview</h2>
          <p className="text-gray-400">
            Store information will be displayed here.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-4">
          {storeCount.map((store)=>(
            <div key={store.store_id} className="p-4 bg-transparent shadow-gray-100 shadow-sm rounded-md ">
              <h1 className="text-3xl w-full font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {store.store_name || "Store Name"}
            </h1>
              <p className="mb-2 text-gray-300">
                <span className="font-semibold text-indigo-400">Location:</span>{" "}
                {store.address || "N/A"}
              </p>
              <p>{}</p>
            </div>
          ))}
        </div>
       
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className=" p-4 md:p-6 space-y-4 md:space-y-5 my-5">
        <div className="text-gray-200">
          <h1 className="text-xl md:text-3xl text-center font-bold">
            Welcome to the Dashboard
          </h1>
        
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <StatCard
            icon={FaStore}
            label="Total Stores"
            value={userCount}
            color="bg-indigo-500"
          />
          <StatCard
            icon={FaComments}
            label="Total Reviews"
            value={storeCount.length}
            color="bg-pink-500"
          />
          <StatCard
            icon={FaStar}
            label="Avg Store Rating"
            value={storeRating}
            color="bg-yellow-500"
          />
        </div>
      </div>
      <div>
        <StoreCard />
      </div>
    </div>
  );
};

export default Dashboard;

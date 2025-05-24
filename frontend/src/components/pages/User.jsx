import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = import.meta.env.VITE_API_BACKEND;
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/users`, {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }); // Replace with your API endpoint
      setUsers(response.data.result);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch users");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (error)
    return (
      <div className="text-center mt-10 text-red-500 min-h-screen text-xl">
        {error}
      </div>
    );

  return (
    <div className="p-6 min-h-screen text-sm md:text-base bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <h1 className="text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-300">
        User List
      </h1>{" "}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 bg-opacity-90 border border-gray-700 shadow-lg rounded-lg">
          <thead>
            <tr className="border">
              <th className="px-4 py-2 border bg-gradient-to-r from-purple-700 to-blue-700 text-white">Name</th>
              <th className="px-4 py-2 border bg-gradient-to-r from-purple-700 to-blue-700 text-white">Email</th>
              <th className="px-4 py-2 border bg-gradient-to-r from-purple-700 to-blue-700 text-white">Address</th>
              <th className="bpx-4 py-2 border bg-gradient-to-r from-purple-700 to-blue-700 text-white">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="text-center text-white border  hover:bg-gradient-to-r hover:from-gray-700 hover:to-blue-800 transition"
              >
                <td className="border border-gray-100 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-100 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-100 px-4 py-2">
                  {user.address}
                </td>
                <td className="border border-gray-100 px-4 py-2">
                  {user.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;

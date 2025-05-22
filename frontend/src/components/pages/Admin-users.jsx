import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const url = import.meta.env.VITE_API_BACKEND;
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/users-admin`); // Replace with your API endpoint
      setUsers(response.data.result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
      setErr("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (err) {
    return <div className="text-red-600 text-center mt-10">{err}</div>;
  }

  return (
    <div className="p-2 sm:p-4 md:p-6 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-300">
        Admin List
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gradient-to-br bg-gray-800 bg-opacity-90 border-gray-700 border rounded-lg shadow-lg text-xs sm:text-sm md:text-base">
          <thead>
            <tr className="bg-gradient-to-r from-purple-700 to-blue-700 text-white">
              <th className="px-2 sm:px-4 py-2 border-b border-l border-r text-gray-200">Name</th>
              <th className="px-2 sm:px-4 py-2 border-b border-r text-gray-200">Email</th>
              <th className="px-2 sm:px-4 py-2 border-b border-r text-gray-200">Address</th>
              <th className="px-2 sm:px-4 py-2 border-b border-r text-gray-200">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gradient-to-r hover:from-[#414345] hover:to-[#232526] text-center text-gray-100 font-semibold text-xs sm:text-sm md:text-base transition-colors"
              >
                <td className="px-2 sm:px-4 py-2 border-b border-l border-r break-words max-w-xs">{user.name}</td>
                <td className="px-2 sm:px-4 py-2 border-b border-l border-r break-words max-w-xs">{user.email}</td>
                <td className="px-2 sm:px-4 py-2 border-b border-l border-r break-words max-w-xs">{user.address}</td>
                <td className="px-2 sm:px-4 py-2 border-b border-l border-r break-words max-w-xs">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;

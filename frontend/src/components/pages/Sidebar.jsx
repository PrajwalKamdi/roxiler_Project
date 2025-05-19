import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowForwardSharp,IoAddCircleOutline } from 'react-icons/io5'
const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-800 text-white py-4 px-10">
    {/* <h2 className="text-2xl font-bold mb-6">Dashboard</h2> */}
    <ul className="space-y-4 mb-6">
    <li>
        <Link
          to="dashboard"
          className="flex justify-between items-center py-2 px-4 rounded border border-gray-700 hover:bg-gray-700 transition"
        >
          DashBoard
        </Link>
      </li>
      <hr />
      <li>
        <Link
          to="add-store"
          className="flex justify-between items-center py-2 px-4 rounded border border-gray-700 hover:bg-gray-700 transition"
        >
          Add New Store<IoAddCircleOutline size={20}/>
        </Link>
      </li>
      <li>
        <Link
          to="add-user"
          className="flex justify-between items-center py-2 px-4 rounded border border-gray-700 hover:bg-gray-700 transition"
        >
          Add New User<IoAddCircleOutline size={20}/>
        </Link>
      </li>
      <li>
        <Link
          to="add-admin"
          className="flex justify-between items-center py-2 px-4 rounded border border-gray-700 hover:bg-gray-700 transition"
        >
          Add New Admin<IoAddCircleOutline size={20}/>
        </Link>
      </li>
    </ul>
    <hr  />
    <ul className="space-y-4 mt-6">
      <li>
        <Link
          to="store-list"
          className="flex justify-between items-center py-2 px-4 rounded border border-gray-700 hover:bg-gray-700 transition"
        >
          Stores<IoArrowForwardSharp size={20}/>
        </Link>
      </li>
      <li>
        <Link
          to="users"
          className="flex justify-between items-center py-2 px-4 rounded border border-gray-700 hover:bg-gray-700 transition"
        >
           Users<IoArrowForwardSharp size={20}/>
        </Link>
      </li>
      <li>
        <Link
          to="admin-users"
          className="flex justify-between items-center py-2 px-4 rounded border border-gray-700 hover:bg-gray-700 transition"
        >
          Admin Users<IoArrowForwardSharp size={20}/>
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar

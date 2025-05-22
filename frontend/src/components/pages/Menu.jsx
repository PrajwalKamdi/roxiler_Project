import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div
      className={`${menu ? "block" : "hidden"} min-h-screen bg-neutral-900 m-0`}
    >
      <button
        className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md"
        onClick={handleMenu}
      >
        Close
      </button>
      <nav className="flex flex-col gap-4 py-5 px-6">
        <NavLink
          to="store-list"
          className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
          activeClassName="bg-blue-500 text-white"
          onClick={handleMenu}
        >
          Stores
        </NavLink>
        <NavLink
          to="users"
          className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
          activeClassName="bg-blue-500 text-white"
          onClick={handleMenu}
        >
          Users
        </NavLink>
        <NavLink
          to="admin-users"
          className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
          activeClassName="bg-blue-500 text-white"
          onClick={handleMenu}
        >
          Admin Users
        </NavLink>
        <NavLink
          to="add-store"
          className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
          activeClassName="bg-blue-500 text-white"
          onClick={handleMenu}
        >
          Add Store
        </NavLink>
        <NavLink
          to="add-user"
          className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
          activeClassName="bg-blue-500 text-white"
          onClick={handleMenu}
        >
          Add User
        </NavLink>
        <NavLink
          to="add-admin"
          className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
          activeClassName="bg-blue-500 text-white"
          onClick={handleMenu}
        >
          Add Admin
        </NavLink>
        <NavLink
          to="profile"
          className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
          activeClassName="bg-blue-500 text-white"
          onClick={handleMenu}
        >
          Profile
        </NavLink>
      </nav>
    </div>
  );
};

export default Menu;

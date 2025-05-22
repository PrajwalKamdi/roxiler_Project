import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

const Adminpanel = () => {
  const [menu, setMenu] = useState(false);
    const handleMenu = () => {
      setMenu(!menu);
    };
  return (
    <div>
      <header className="flex justify-between items-center bg-neutral-900 text-white p-4">
        <div>
          <h1 className="text-xl lg:text-3xl font-bold text-violet-100">
            <Link to={""}>Roxiler Admin</Link>{" "}
          </h1>
        </div>
        <div className={`${menu ? "hidden" : ""}`}>
          <button onClick={handleMenu}>
            <LuMenu />
          </button>
        </div>
        <div className="hidden md:flex  items-center gap-4">
          <ul className="flex gap-4">
            <li>
              <NavLink
                to={"store-list"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-violet-700 py-2  px-4 rounded-md text-violet-100 text-lg transition-colors duration-500"
                    : "py-2 px-4   hover:bg-violet-700 rounded-md text-lg hover:text-violet-100 hover:transition-colors hover:duration-500"
                }
              >
                Stores
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"users"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-violet-700 py-2  px-4 rounded-md text-violet-100 text-lg transition-colors duration-500"
                    : "py-2 px-4   hover:bg-violet-700 rounded-md text-lg hover:text-violet-100 hover:transition-colors hover:duration-500"
                }
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"admin-users"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-violet-700 py-2  px-4 rounded-md text-violet-100 text-lg transition-colors duration-500"
                    : "py-2 px-4   hover:bg-violet-700 rounded-md text-lg hover:text-violet-100 hover:transition-colors hover:duration-500"
                }
              >
                Admin Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"store"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-violet-700 py-2  px-4 rounded-md text-violet-100 text-lg transition-colors duration-500"
                    : "py-2 px-4   hover:bg-violet-700 rounded-md text-lg hover:text-violet-100 hover:transition-colors hover:duration-500"
                }
              >
                Add Store
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"add-user"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-violet-700 py-2  px-4 rounded-md text-violet-100 text-lg transition-colors duration-500"
                    : "py-2 px-4   hover:bg-violet-700 rounded-md text-lg hover:text-violet-100 hover:transition-colors hover:duration-500"
                }
              >
                Add User
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"add-admin"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-violet-700 py-2  px-4 rounded-md text-violet-100 text-lg transition-colors duration-500"
                    : "py-2 px-4   hover:bg-violet-700 rounded-md text-lg hover:text-violet-100 hover:transition-colors hover:duration-500"
                }
              >
                Add Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"Profile"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-violet-700 py-2  px-4 rounded-md text-violet-100 text-lg transition-colors duration-500"
                    : "py-2 px-4   hover:bg-violet-700 rounded-md text-lg hover:text-violet-100 hover:transition-colors hover:duration-500"
                }
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
       
      </header>
       <div
          className={`z-10 ${
            menu ? "block" : "hidden"
          } min-h-screen bg-neutral-900 m-0`}
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
    </div>
  );
};

export default Adminpanel;

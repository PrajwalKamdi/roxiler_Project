import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
const Adminpanel = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <header className="flex justify-between items-center bg-sky-900 text-white p-4">
        <div>
          <h1 className="text-xl lg:text-3xl font-bold text-violet-100">
            <Link to={""}>Roxiler Admin</Link>{" "}
          </h1>
        </div>
        <div className="md:hidden">
          <button
            onClick={handleMenu}
            className={`${menu ? "hidden" : "block"} pr-1`}
          >
            <LuMenu color="white" size={20} />
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
                    : "py-2 px-4   hover:bg-violet-700 rounded-md text-lg  hover:text-violet-100 hover:transition-colors hover:duration-500"
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
        } min-h-screen bg-sky-900 m-0 top-0 left-0 right-0 bottom-0 fixed`}
      >
        <button
          onClick={handleMenu}
          className={`${
            menu ? "block" : "hidden"
          } flex justify-end pt-5 px-5 mb-3 w-full`}
        >
          <AiOutlineClose color="white" size={20} />
        </button>
        <nav className="flex flex-col gap-4 py-5 px-6">
          <NavLink
            to="store-list"
            className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
            onClick={handleMenu}
          >
            Stores
          </NavLink>
          <NavLink
            to="users"
            className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
            onClick={handleMenu}
          >
            Users
          </NavLink>
          <NavLink
            to="admin-users"
            className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
            onClick={handleMenu}
          >
            Admin Users
          </NavLink>
          <NavLink
            to="add-store"
            className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
            onClick={handleMenu}
          >
            Add Store
          </NavLink>
          <NavLink
            to="add-user"
            className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
            onClick={handleMenu}
          >
            Add User
          </NavLink>
          <NavLink
            to="add-admin"
            className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
            onClick={handleMenu}
          >
            Add Admin
          </NavLink>
          <NavLink
            to="profile"
            className="py-2 px-4 rounded-md text-gray-800 bg-gray-100 hover:bg-blue-100"
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

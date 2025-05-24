import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [role, setRole] = React.useState(null);
  React.useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);
  return (
    <div>
      <header className="bg-indigo-500 text-white">
        <nav className="flex justify-between items-center lg:py-5 p-4">
          <Link to="" className="lg:text-4xl font-bold text-indigo-100 hover:text-indigo-200 transition-colors duration-500">
            Roxiler System
          </Link>
          <ul className="flex justify-end items-center lg:space-x-8">
            <li>
              <NavLink
                to="available-store"
                className={({ isActive }) =>
                  isActive
                    ? "bg-violet-700 py-2 px-4 rounded-md   lg:text-lg transition-colors duration-500"
                    : "py-2 px-4 hover:bg-violet-700 rounded-md lg:text-lg  hover:transition-colors hover:duration-500"
                }
              >
                Stores
              </NavLink>
            </li>
            <li>
              {role === "owner" && (
                <NavLink
                  to="users"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-violet-700 py-2 px-4 rounded-md   lg:text-lg transition-colors duration-500"
                      : "py-2 px-4 hover:bg-violet-700 rounded-md lg:text-lg  hover:transition-colors hover:duration-500"
                  }
                >
                  Users
                </NavLink>
              )}
            </li>

            <li>
              <NavLink to="profile"  className={({ isActive }) =>
                isActive
                  ? "bg-violet-700 py-2 px-4 rounded-md   lg:text-lg transition-colors duration-500"
                  : "py-2 px-4 hover:bg-violet-700 rounded-md lg:text-lg  hover:transition-colors hover:duration-500"
              }>
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

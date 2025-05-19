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
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <Link to="dashboard" className="text-2xl font-bold text-blue-400">
            Roxiler System
          </Link>
          <ul className="flex gap-10">
            {role === "owner" && (
              <li>
                <NavLink to="dashboard" className="hover:text-gray-400">
                  Dashboard
                </NavLink>
              </li>
            )}

            <li>
              <NavLink to="available-store" className="hover:text-gray-400">
                Store List
              </NavLink>
            </li>
            <li>
              {role === "owner" && (
                <NavLink to="users" className="hover:text-gray-400">
                  Users
                </NavLink>
              )}
            </li>
           
            <li>
              <NavLink to="profile" className="hover:text-gray-400">
                {localStorage.getItem("username")}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

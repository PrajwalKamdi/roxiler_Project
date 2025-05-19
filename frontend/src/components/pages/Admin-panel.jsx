import { Navigate, NavLink, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminPanel = () => {
 
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Roxiler Admin Panel</h1>
        {/* <button
          className="border p-2 rounded-xl"
          onClick={handleLogout}
        >
          Log Out
        </button> */}
        <NavLink to={"profile"}>{localStorage.getItem('username')}</NavLink>
      </header>
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <main className="flex-1">
          {/* <h2 className="text-xl font-semibold text-gray-800">
            Welcome, Admin
          </h2>
          <p className="mt-4 text-gray-600">
            Use the navigation menu to access different sections of the admin
            panel.
          </p> */}
          {/* Add your admin panel content here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;

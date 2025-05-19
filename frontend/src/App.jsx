import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AdminPanel from "./components/pages/Admin-panel";
import { Outlet } from "react-router-dom";

const App = () => {
  const [role, setRole] = useState(null);
  const handleRole = () => {
    const getRole = localStorage.getItem("role");
    setRole(getRole);
  };
  useEffect(() => {
    handleRole();
  }, []);
  if (role === null) {
    return (
      <div className="min-h-screen text-3xl flex justify-center items-center">
        Loading...
      </div>
    );
  }
  return (
    <div>
      {role === "admin" ? <AdminPanel /> : <Header />}
      {role === "user"  && <Outlet />}
      {role === "owner"  && <Outlet />}

      <Footer />
    </div>
  );
};
export default App;

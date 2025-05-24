import React, { Suspense } from "react";
import Footer from "../Footer/Footer";
import AdminPanel from "../pages/Admin-panel";
import Loading from "../pages/Loading";
const Outlet = React.lazy(() => import("react-router-dom").then((module) => ({ default: module.Outlet })));
const Admin_layout = () => {
  const role = localStorage.getItem("role") === "admin";
  return (
    <div>
      <AdminPanel />
      {/* <Menu/> */}
      <Suspense fallback={<Loading />}>
        <Outlet/>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Admin_layout;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../../App";
import Dashboard from "../pages/Dashboard";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Store from "../pages/Store";
import StoreList from "../pages/Store_List";
import User from "../pages/User";
import AdminUsers from "../pages/Admin-users";
import ProtectedRoute from "../pages/ProtectedRoute";
import Profile from "../pages/Profile";
import Store_user from "../pages/Store_user";
import Single_Store from "../pages/Single_Store";
import Forgot from "../pages/Forgot";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }
      >
        <Route path="" element={<Dashboard/>} />
        <Route path="store" element={<Store />} />
        <Route path="store-list" element={<StoreList />} />
        <Route path="available-store" element={<Store_user />} />
        <Route path="users" element={<User />} />
        <Route path="admin-users" element={<AdminUsers />} />
        <Route path="profile" element={<Profile />} />
        <Route path="add-store" element={<Store />} />
        <Route path="add-user" element={<Register name ={"User"} />} />
        <Route path="add-admin" element={<Register name={"Admin"} />} />
        <Route path="store/:store_id" element={<Single_Store />} />
        <Route path="/home/profile/forgot-password" element={<Forgot/>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Route>
    </>
  )
);

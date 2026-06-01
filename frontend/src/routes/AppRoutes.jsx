
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import LandingPage from "../pages/LandingPage";

import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminLogin from "../pages/AdminLogin";

import CustomerDashboard from "../pages/Customer/CustomerDashboard";
import CreateTicket from "../pages/Customer/CreateTicket";
import MyTickets from "../pages/Customer/MyTickets";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import AllTickets from "../pages/Admin/AllTickets";
import TicketDetails from "../pages/Admin/TicketDetails";

const AppRoutes = () => {
  return (
    <Routes>

      

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

   
      <Route
        path="/customer/dashboard"
        element={
          <ProtectedRoute role="customer">
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/create-ticket"
        element={
          <ProtectedRoute role="customer">
            <CreateTicket />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/my-tickets"
        element={
          <ProtectedRoute role="customer">
            <MyTickets />
          </ProtectedRoute>
        }
      />

    

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/tickets"
        element={
          <ProtectedRoute role="admin">
            <AllTickets />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/tickets/:ticketId"
        element={
          <ProtectedRoute role="admin">
            <TicketDetails />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default AppRoutes;
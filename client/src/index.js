import React from "react";
import ReactDOM from "react-dom/client";
import "./common//styles/index.css";
import "./common//styles/utilities.css";
import "./common//styles/colors.css";
import App from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./common/components/Layout";
import SingleStation from "./pages/singleStation";
import Stations from "./pages/stations";
import Login from "./pages/login";
import Admin from "./pages/admin";
import Manager from "./pages/manager";
import Dashboard from "./pages/admin/components/Dashboard";
import CoinRequests from "./pages/admin/components/CoinRequests";
import MyStation from "./pages/manager/components/MyStation";
import MyRides from "./pages/manager/components/MyRides";
import MyReviews from "./pages/manager/components/MyReviews";
import MyMessages from "./pages/manager/components/MyMessages";
import AdminStations from "./pages/admin/components/AdminStations";
import MyTickets from "./pages/manager/components/MyTickets";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/*Passenger */}
        <Route path="/" element={<Layout children={<App />} />} />
        <Route path="/stations" element={<Layout children={<Stations />} />} />
        <Route
          path="/singleStation/:id"
          element={<Layout children={<SingleStation />} />}
        />
        <Route path="/login" element={<Layout children={<Login />} />} />

        {/*Admin */}
        <Route
          path="/dashboard/admin"
          element={<Admin children={<Dashboard />} />}
        />

        <Route
          path="/dashboard/admin/stations"
          element={<Admin children={<AdminStations />} />}
        />
        <Route
          path="/dashboard/admin/coin-requests"
          element={<Admin children={<CoinRequests />} />}
        />

        {/*Manager */}
        <Route
          path="/dashboard/manager"
          element={<Manager children={<MyStation />} />}
        />

        <Route
          path="/dashboard/manager/myRides"
          element={<Manager children={<MyRides />} />}
        />
        <Route
          path="/dashboard/manager/myReviews"
          element={<Manager children={<MyReviews />} />}
        />
        <Route
          path="/dashboard/manager/myMessages"
          element={<Manager children={<MyMessages />} />}
        />
        <Route
          path="/dashboard/manager/myTickets"
          element={<Manager children={<MyTickets />} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

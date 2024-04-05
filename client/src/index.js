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
import UserContextProvider from "./context/userContext";
import ProtectedUser from "./routes/ProtectedUser";
import ProtectedAdmin from "./routes/ProtectedAdmin";
import ProtectedManager from "./routes/ProtectedManager";
import ProtectedLoggedIn from "./routes/ProtectedLoggedIn";
import StationContextProvider from "./context/stationsContext";
import ProtectedHome from "./routes/ProtectedHome";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <StationContextProvider>
        <BrowserRouter>
          <Routes>
            {/*Passenger */}
            <Route element={<ProtectedHome />}>
              <Route path="/" element={<Layout children={<App />} />} />
              <Route
                path="/stations"
                element={<Layout children={<Stations />} />}
              />
              <Route
                path="/singleStation/:id"
                element={<Layout children={<SingleStation />} />}
              />
              <Route elemen={<ProtectedLoggedIn />}>
                <Route
                  path="/login"
                  element={<Layout children={<Login />} />}
                />
              </Route>
            </Route>
            <Route element={<ProtectedUser />}>
              {/*Admin */}
              <Route element={<ProtectedAdmin />}>
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
              </Route>

              {/*Manager */}
              <Route element={<ProtectedManager />}>
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
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </StationContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

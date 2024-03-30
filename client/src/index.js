import React from "react";
import ReactDOM from "react-dom/client";
import "./common//styles/index.css";
import "./common//styles/utilities.css";
import "./common//styles/colors.css";
import App from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./common/components/Layout";
import SingleStation from "./pages/singleStation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<App />} />} />
        <Route
          path="/singleStation"
          element={<Layout children={<SingleStation />} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

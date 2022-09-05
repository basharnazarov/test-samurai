import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Layout>
    <App />
  </Layout>
);

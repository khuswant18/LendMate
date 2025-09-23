import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import OptionSection from "./Pages/OptionSection/OptionSection";
import BorrowerSection from "./Pages/BorrowerSection/BorrowerSection";
import LenderSection from "./Pages/LenderSection/LenderSection";
import BorrowerCards from "./Pages/BorrowerCards/BorrowerCard";
import BorrowerProfile from "./Pages/BorrowerProfile/BorrowerProfile";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";

// Basic 404 page component (inline to keep it minimal)
function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        color: "#111",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
        textAlign: "center",
        paddingTop:"20%"
      }}
    >
      <h1 style={{ margin: "0 0 1rem", fontSize: "2rem" }}>
        404 - Page Not Found
      </h1>
      <p style={{ margin: "0 0 1.5rem", fontSize: "0.95rem" }}>
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}
      >
        Go back home
      </a>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: " ",
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      // {
      //   path: 'option',
      //   element: <OptionSection />,
      // },
      {
        path: "borrower-form",
        element: <BorrowerSection />,
      },
      // {
      //   path: 'lender',
      //   element: <LenderSection />,
      // },
      {
        path: "dashboard",
        element: <BorrowerCards />,
      },
      {
        path: "borrowerProfile",
        element: <BorrowerProfile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

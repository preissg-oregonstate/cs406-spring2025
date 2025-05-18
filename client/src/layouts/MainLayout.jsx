import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const MainLayout = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // When component mounts, get info from token
  useEffect(() => {
    axios
      .get("http://localhost:5150/api/auth/me", { withCredentials: true })
      .then((res) => {
        console.log("Auth check success:", res.data);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.error("Error during auth check:", err);
        setLoggedIn(false);
      });
  }, []);

  return (
    <div className="primary-site-container">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

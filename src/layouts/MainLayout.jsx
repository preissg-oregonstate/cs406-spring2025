import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="primary-site-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

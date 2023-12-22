import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import useAuth from "../hooks/useAuth";


const Mainlayout = () => {
    const { user, logOut } = useAuth() || {};
    if (user) {
        return <Navigate to="/tms" replace />
    }

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Mainlayout;
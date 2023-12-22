import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";


const Mainlayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
            
        </div>
    );
};

export default Mainlayout;
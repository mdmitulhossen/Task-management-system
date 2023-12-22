import { NavLink, useNavigate } from "react-router-dom";
import Container from "../shared/Container";

const navMenu = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Feature",
        path: "/feature",
    },
    {
        name: "About",
        path: "/about",
    }
]

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="absolute w-full top-0 z-10 taskContainer left-1/2 -translate-x-1/2">
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            {
                                navMenu.map((item, index) => (
                                    <li key={index}>
                                        <NavLink to={item.path} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#525FFB]" : ""
                                        }
                                        >{item.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <a className="text-xl font-bold">TMS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {
                            navMenu.map((item, index) => (
                                <li key={index} className="hover:text-[#525FFB] duration-200">
                                    <NavLink to={item.path}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#525FFB]" : ""
                                        }
                                    >{item.name}</NavLink>
                                </li>
                            ))

                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a onClick={()=>navigate('/login')} className=" bg-[#525FFB] text-white px-3 py-1 rounded cursor-pointer">Try It</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
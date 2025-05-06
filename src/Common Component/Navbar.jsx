import React from 'react';
import {navItem} from "../Lib/lib.js";
import logoPaw from "../assets/logoPaw.svg";
import {FaRegBell} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaMagnifyingGlass} from "react-icons/fa6";
import Button from "./Button.jsx";

function Navbar() {
    return (
        <div className={"fixed z-20 top-0 start-0 w-full bg-[#FFF9F4] xl:p-4 px-2  shadow-sm"}>
            <nav className="navbar container mx-auto justify-between">
                <div className="navbar-start">
                    <div
                        className={"flex items-center space-x-3 justify-center cursor-pointer hover:scale-105 hover:rotate-2 transition duration-200 ease-in-out"}>
                        <img src={logoPaw || ""} alt="Logo" className="w-10 h-10"/> <p
                        className={"font-Sora text-[26px] font-semibold hidden xl:block"}>Browse<span
                        className={"text-accent"}>4</span>Pets
                    </p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* Navigation Items */}
                    <ul className="hidden md:flex space-x-4 font-Sora text-xl">
                        {navItem.map((item) => (
                            <li
                                key={item.id}
                                className="hover:bg-[#F4E1D5] hover:text-[#FF6B35] rounded-lg px-4 py-2 transition duration-300 ease-in-out cursor-pointer"
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end hidden xl:flex gap-x-2">
                     <span
                         className="cursor-pointer mr-1 hover:text-[#FF6B35] transition duration-200 ease-in-out text-xl">
                        <FaRegBell/>
                    </span>
                    <span
                        className="cursor-pointer mr-1 hover:text-[#FF6B35] transition duration-200 ease-in-out text-xl"><FaMagnifyingGlass/></span>
                    <Button btnText={"Login"}/>
                    <Button btnText={"Register"}/>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <GiHamburgerMenu className={"text-xl"}/>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu right-0 font-Sora dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItem.map((item) => (
                            <li
                                key={item.id}
                                className="hover:bg-[#F4E1D5] hover:text-[#FF6B35] rounded-lg px-4 py-2 transition duration-300 ease-in-out cursor-pointer"
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
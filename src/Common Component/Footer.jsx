import React from 'react';
import {navItem} from "../Lib/lib.js";
import logoBlack from "../assets/logoPaw.svg";
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";

const socialIcons = [{
    id: "facebook",
    icon: <FaFacebook/>
}, {
    id: "instagram",
    icon: <FaInstagram/>
}, {
    id: "youtube",
    icon: <FaYoutube/>
}, {
    id: "linkedin",
    icon: <FaLinkedin/>
}]

function Footer() {
    return (
        <div className={"bg-[rgba(255,220,38,0.50)] -mt-40 py-10"}>
            <div className={"container mx-auto"}>
                <div className={"flex justify-between items-center mt-72"}>
                    <div className={"flex flex-col space-y-5 w-1/3"}>
                        <div className={"flex items-center space-x-3 "}>
                            <img src={logoBlack || ""} alt="logoBlack"/>
                            <p className={"font-Sora text-[26px]"}>Browse<span className={"text-accent"}>4</span>Pets
                            </p>
                        </div>
                        <p className={"text-xl"}>Discover a world of treats, toys, and essentials handpicked for
                            your
                            furry
                            friends</p>
                    </div>

                    <ul className={"flex flex-col space-y-3"}>
                        {navItem?.map((item) => (
                            <li key={item.id}
                                className={"text-xl hover:text-red-300 hover:scale-105 cursor-pointer transition-colors duration-300 "}>{item.name}</li>
                        ))}
                    </ul>
                    <div>
                        <p className={"font-Sora"}>Follow Us</p>
                        <div className={"flex space-x-3 mt-4"}>
                            {socialIcons?.map((icon) => (
                                <div key={icon.id}
                                     className={"bg-white rounded-full text-xl p-3 hover:bg-accent-light cursor-pointer transition duration-300 ease-in-out"}>
                                    {icon.icon}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
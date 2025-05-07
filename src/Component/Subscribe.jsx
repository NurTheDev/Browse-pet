import React from 'react';
import dog4 from "../assets/dog4.png";
import InputCompo from "../Common Component/InputCompo.jsx";
import Button from "../Common Component/Button.jsx";

function Subscribe() {
    return (
        <div className={"mx-4"}>
            <div
                className={"container hover:scale-x-95 transition duration-200 mx-auto px-4 lg:px-0 bg-secondary py-10 lg:py-9 lg:mt-32 mt-20 rounded-2xl relative z-10"}>
                <div className={"flex flex-col lg:flex-row justify-evenly  items-center lg:gap-x-10 gap-4"}>
                    <div><img src={dog4 || ""} alt="dog" className={"lg:w-[330px] w-[200px]"}/></div>
                    <div className={"space-y-5 lg:text-left text-center"}>
                        <h2 className={"heading2"}>Get Pawsome News!</h2>
                        <p>
                            Exclusive training tips, ticks, product deals and more.
                        </p>
                        <InputCompo placeholder={"Enter email...."} type={"email"}
                                    icon={<svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"
                                               viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </g>
                                    </svg>}/>
                        <Button btnText={"Subscribe"} styles={"mt-2 lg:mt-5"}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Subscribe;
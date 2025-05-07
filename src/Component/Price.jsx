import React from 'react';
import dog3 from "../assets/dog3.png";
import dog4 from "../assets/dog4.png";

function Price() {
    return (
        <div className={"container mx-auto mt-14 lg:mt-30 px-4 lg:px-0"}>
            <h2 className={"heading2"}>Everyday low Price</h2>
            <div className={"lg:grid lg:grid-cols-5 justify-center lg:gap-7 mt-10"}>
                <div
                    className={"col-span-3 flex justify-center items-center rounded-xl bg-[linear-gradient(109deg,_#F8CCFB_1.27%,_#ACD2FD_100%)] lg:px-20 px-5"}>
                    <div className={"space-y-3 "}>
                        <p className={"font-Sora lg:text-lg"}>Under Price</p>
                        <h3 className={"text-2xl lg:text-[32px] font-bold"}>Pet Grooming Mitt</h3>
                        <p className={"text-lg lg:text-2xl text-primary font-medium"}>(Easy Hair Removal)</p>
                        <h2 className={"text-4xl lg:text-[56px] font-bold"}>$7.99</h2>
                    </div>
                    <div>
                        <img src={dog3 || ""} alt="dog" className={"lg:w-[383px] w-[214px]"}/>
                    </div>
                </div>
                <div
                    className={"col-span-2 flex justify-between items-center rounded-xl px-4 bg-[linear-gradient(109deg,_#FFF9F4_1.27%,_#F9DF8A_100%)] mt-4 lg:mt-0"}>
                    <div className={"space-y-3 "}>
                        <h3 className={"text-2xl lg:text-[32px] font-bold"}>T-Shirt for Dogs</h3>
                        <h2 className={"text-4xl lg:text-[56px] text-accent font-bold"}>$7.99</h2>
                    </div>
                    <div>
                        <img src={dog4 || ""} alt="dog" className={"lg:w-[312px] w-[214px]"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Price;
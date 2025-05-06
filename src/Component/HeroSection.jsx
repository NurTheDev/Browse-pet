import React from 'react';
import Button from "../Common Component/Button.jsx";

function HeroSection() {
    return (
        <div
            className={"bg-[url('./assets/Hero.png')] bg-contain bg-no-repeat bg-center h-[80vh] flex items-center container mx-auto"}>
            <div className={"lg:w-2/5 p-4 absolute top-14 lg:relative left-0"}>
                <h1 className={"xl:text-6xl font-bold lg:leading-20 leading-12 text-4xl"}>Pamper Your Pet,
                    Because They
                    Deserve
                    the
                    Bes</h1>
                <p className={"lg:text-xl lg:leading-9 mt-3 opacity-70"}>Discover a world of treats, toys, and
                    essentials
                    handpicked for
                    your furry
                    friends. Shop now and make
                    tails wag with joy!</p>
                <Button btnText={"Shop Now"} styles={"mt-5"}/>
            </div>
        </div>
    );
}

export default HeroSection;
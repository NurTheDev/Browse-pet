import React from 'react';
import HeroSection from "../Component/HeroSection.jsx";
import Category from "../Component/Category.jsx";

function Home() {
    return (
        <div>
            <HeroSection/>
            <Category styles={"lg:mt-20 -mt-36"}/>
        </div>
    );
}

export default Home;
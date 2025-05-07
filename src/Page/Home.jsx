import React from 'react';
import HeroSection from "../Component/HeroSection.jsx";
import Category from "../Component/Category.jsx";
import Product from "../Component/Product.jsx";
import Price from "../Component/Price.jsx";
import Subscribe from "../Component/Subscribe.jsx";

function Home() {
    return (
        <div>
            <HeroSection/>
            <Category styles={"lg:my-20 -mt-36"}/>
            <Product/>
            <Price/>
            <Subscribe/>
        </div>
    );
}

export default Home;
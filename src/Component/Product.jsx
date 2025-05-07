import React from 'react';
import dog from "../assets/dog.svg";
import cat from "../assets/cat.svg";
import fish from "../assets/fish.svg";
import bird from "../assets/bird.svg";
import smallPet from "../assets/small.svg";
import rabbit from "../assets/rabbit.svg";
import {FaStar} from "react-icons/fa";

const product = [
    {
        id: dog,
        name: "Dog",
        image: dog,
        rating: 4.5,
        price: "$20"
    },
    {
        id: cat,
        name: "Cat",
        image: cat,
        rating: 4.7,
        price: "$25"
    },
    {
        id: "fish",
        name: "Fish",
        image: fish,
        rating: 4.3,
        price: "$15"
    },
    {
        id: "bird",
        name: "Birds",
        image: bird,
        rating: 4.6,
        price: "$18"
    },
    {
        id: "small-pet",
        name: "Small pet",
        image: smallPet,
        rating: 4.4,
        price: "$12"
    },
    {
        id: "rabbits",
        name: "Rabbits",
        image: rabbit,
        rating: 4.8,
        price: "$22"
    }, {
        id: "rabbits",
        name: "Rabbits",
        image: rabbit,
        rating: 4.8,
        price: "$22"
    },
    {
        id: "hamster",
        name: "Hamster",
        image: smallPet,
        rating: 4.2,
        price: "$10"
    },
    {
        id: "turtle",
        name: "Turtle",
        image: fish,
        rating: 4.1,
        price: "$15"
    }
]

function Product() {
    return (
        <div className={"bg-secondary lg:py-28 py-10 "}>
            <div className={"container mx-auto px-4 lg:px-0 "}>
                <h2 className={"heading2"}>Trending Pet Products</h2>
                <div className={"grid lg:grid-cols-3 gap-y-4 gap-x-12 mt-10"}>
                    <div
                        className={"bg-accent-light rounded-xl lg:py-12 lg:px-9 py-10 px-7 bg-[url('./assets/dogBg.png')] bg-contain bg-no-repeat bg-right-bottom h-full flex flex-col items-start gap-y-4 "}>
                        <h3 className={"lg:text-3xl text-2xl font-bold"}>T-Shirt For Dogs</h3>
                        <p className={"opacity-70 w-4/5 lg:w-3/5 text-sm lg:text-base"}>Discover a world of treats, toys
                            and
                            essentials handpicked
                            for</p>
                        <button
                            className={`lg:text-xl font-Sora hover:bg-transparent hover:border-secondary border-2 border-accent rounded-lg py-[10px] px-[30px] transition duration-300 ease-in-out bg-secondary `}>
                            Shop Now
                        </button>
                    </div>
                    <div className={"col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-4"}>
                        {product.map((item) => (
                            <div key={item.id}
                                 className={"flex items-center justify-start gap-x-7  p-4 bg-primary rounded-xl font-Sora hover:rotate-z-2 cursor-pointer transition duration-300 ease-in-out"}>
                                <div
                                    className={"bg-secondary rounded-xl w-[86px] h-[86px] flex items-center justify-center overflow-hidden"}>
                                    <img src={item.image} alt="image"
                                         className={"hover:scale-110 transition duration-300 ease-in-out"}/>
                                </div>
                                <div className={"space-x-2"}>
                                    <p className={"flex justify-center-center gap-x-3"}><span
                                        className={"text-yellow-400"}><FaStar/></span>
                                        <span>{item.rating}</span></p>
                                    <p className={"text-lg font-semibold"}>{item.name}</p>
                                    <p className={"font-medium"}>{item.price}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Product;
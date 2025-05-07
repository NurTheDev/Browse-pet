import React from 'react';
import dog from "../assets/dog.svg";
import cat from "../assets/cat.svg";
import fish from "../assets/fish.svg";
import bird from "../assets/bird.svg";
import smallPet from "../assets/small.svg";
import rabbit from "../assets/rabbit.svg";

const categories = [
    {
        id: dog,
        name: "Dog",
        image: dog
    },
    {
        id: cat,
        name: "Cat",
        image: cat
    },
    {
        id: "fish",
        name: "Fish",
        image: fish
    },
    {
        id: "bird",
        name: "Birds",
        image: bird
    },
    {
        id: "small-pet",
        name: "Small pet",
        image: smallPet
    },

    {
        id: "rabbits",
        name: "Rabbits",
        image: rabbit
    }
]

function Category({styles}) {
    return (
        <div className={`${styles} container mx-auto px-4 lg:px-0`}>
            <h2 className={"heading2"}>
                Browse By Categories
            </h2>
            <div className={"grid grid-cols-2 xl:grid-cols-6 gap-3 lg:gap-6 mt-10"}>
                {categories.map((category) => (
                    <div key={category.id}
                         className={"flex flex-col items-center justify-center bg-accent-light rounded-xl py-7 lg:py-8 px-10 lg:px-12 hover:-rotate-4 transition duration-300 ease-in-out cursor-pointer"}>
                        <div className={"w-[104px] h-[104px] rounded-full bg-white flex items-center justify-center"}>
                            <img src={category.image} alt={category.name}
                                 className={"move hover:scale-110 transition duration-300 ease-in-out"}/>
                        </div>
                        <p className={"lg:text-xl font-semibold mt-6 text-lg"}>{category.name}</p>
                        <p className={"font-Sora mt-3 text-sm lg:text-base"}>3 item</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
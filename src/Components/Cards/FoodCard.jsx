import Link from "next/link";
import React from "react";
import AddToCart from "../Buttons/AddToCart";
import Image from "next/image";

const FoodCard = ({ food }) => {
    
    return (
        <div className="w-full max-w-sm rounded-2xl border shadow hover:shadow-lg transition">
            {/* Image */}
            {/* <img src={food.foodImg} alt={food.title} className="w-full h-48 object-cover rounded-t-2xl" /> */}
            <Image src={food.foodImg} alt={food.title} className="w-full h-48 object-cover rounded-t-2xl" width={500} height={500}></Image>
            {/* Content */}
            <div className="p-4">
                <h2 className="text-xl font-semibold">{food.title}</h2>
                <p className="text-sm text-gray-500">{food.category}</p>

                <p className="text-lg font-bold mt-2">৳ {food.price}</p>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                    <AddToCart></AddToCart>

                    <Link href={`/foods/${food.id}`} className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;

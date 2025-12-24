import FoodCard from '@/Components/Cards/FoodCard';
import React from 'react';

const Foods = async() => {

    const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random", {
        cache: "no-store"
    });
    const data = await res.json();
    await new Promise(resolve => setTimeout(resolve, 2000)); //all food page will open after 3 sec of clicking
    const {foods} = data;
    return (
        <div className='my-4'>
            <h2 className='text-center font-bold text-2xl'>
                Total <span className="text-orange-400">{foods.length}</span> foods found
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    foods.map(food => <FoodCard key={food.id} food={food} />)
                }
            </div>
        </div>
    );
};

export default Foods;
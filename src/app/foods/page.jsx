import React from 'react';

const Foods = async() => {

    const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random", {
        cache: "no-store"
    });
    const data = await res.json();
    const allFoods = data.foods;
    console.log(allFoods);


    return (
        <div>
           <h2>Total Foods: {allFoods.length}</h2>
        </div>
    );
};

export default Foods;
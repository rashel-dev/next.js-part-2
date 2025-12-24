import React from 'react';

const page = async ({params}) => {
    const {id} = await params;  
    const res = await fetch(` https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
    const data = await res.json();
    const {details} = data;
    const food = details;
    console.log(food);
        
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Image */}
                <img src={food.foodImg} alt={food.title} className="w-full h-80 object-cover" />

                {/* Content */}
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">{food.title}</h1>

                    <div className="flex flex-wrap gap-3 mb-4">
                        <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">{food.category}</span>
                        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">{food.area}</span>
                    </div>

                    <p className="text-xl font-semibold text-orange-600 mb-6">৳ {food.price}</p>

                    <a href={food.video} target="_blank" rel="noreferrer" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                        ▶ Watch Cooking Video
                    </a>
                </div>
            </div>
        </div>
    );
};

export default page;
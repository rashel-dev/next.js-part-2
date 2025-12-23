import FoodCardSkeleton from "@/Components/Skeletons/FoodCardSkeleton";
import React from "react";

const loading = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {
            [...Array(12)].map((_, i) => <FoodCardSkeleton key={i}></FoodCardSkeleton> )
        }
    </div>;
};

export default loading;

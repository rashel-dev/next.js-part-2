import React from "react";

const FoodCardSkeleton = () => {
    return (
        <div className="w-full max-w-sm rounded-2xl border shadow animate-pulse">
            {/* Image Skeleton */}
            <div className="w-full h-48 bg-gray-300 rounded-t-2xl" />

            {/* Content Skeleton */}
            <div className="p-4 space-y-3">
                <div className="h-5 w-3/4 bg-gray-300 rounded" />
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
                <div className="h-6 w-1/3 bg-gray-300 rounded" />

                {/* Buttons Skeleton */}
                <div className="flex gap-3 pt-3">
                    <div className="h-10 flex-1 bg-gray-300 rounded-lg" />
                    <div className="h-10 flex-1 bg-gray-200 rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default FoodCardSkeleton;

export default function FoodDetailsSkeleton() {
    return (
        <div className="max-w-4xl mx-auto p-6 animate-pulse">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Image Skeleton */}
                <div className="w-full h-80 bg-gray-300"></div>

                {/* Content Skeleton */}
                <div className="p-6">
                    {/* Title */}
                    <div className="h-8 bg-gray-300 rounded w-2/3 mb-4"></div>

                    {/* Badges */}
                    <div className="flex gap-3 mb-4">
                        <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
                        <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
                    </div>

                    {/* Price */}
                    <div className="h-6 w-32 bg-gray-300 rounded mb-6"></div>

                    {/* Button */}
                    <div className="h-12 w-44 bg-gray-300 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
}

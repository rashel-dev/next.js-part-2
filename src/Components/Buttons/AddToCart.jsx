"use client"
import React, { useState } from 'react';

const AddToCart = () => {
    const [cart, setCart] = useState(false);
    const handleAddToCart = () => { 
        setCart(true);
    }
    
    return <button onClick={handleAddToCart} className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:text-gray-500 disabled:bg-gray-300 disabled:cursor-not-allowed" disabled={cart}>{cart ? "Added" : "Add to Cart"}</button>;
};

export default AddToCart;
import React from "react";
import { type Product } from "../Models/models.ts";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200 w-full max-w-sm mx-auto">
      
      {/* Image */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.title}
        </h2>

        {/* Brand + Category */}
        <p className="text-sm text-gray-500">
          {product.brand || "No Brand"} • {product.category}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-green-600">
            ₹{product.price}
          </span>
          <span className="text-sm text-red-500">
            {product.discountPercentage}% OFF
          </span>
        </div>

        {/* Rating + Stock */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>⭐ {product.rating}</span>
          <span>{product.stock} left</span>
        </div>

        {/* Button */}
        <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
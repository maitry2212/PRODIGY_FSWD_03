import React from "react";

export default function ShoppingProductTile({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
        {product?.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-2">{product?.name || "Product Name"}</h3>
      <p className="text-gray-600 text-sm mb-2">{product?.description || "Product description"}</p>
      <p className="text-lg font-bold text-blue-600">${product?.price || "0.00"}</p>
      
      <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Add to Cart
      </button>
    </div>
  );
} 
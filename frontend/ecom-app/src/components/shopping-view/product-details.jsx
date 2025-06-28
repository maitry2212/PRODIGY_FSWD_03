import React from "react";

export default function ProductDetailsDialog({ open, setOpen, productDetails }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Product Details</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        {productDetails ? (
          <div>
            <h3 className="text-lg font-semibold mb-2">{productDetails.name}</h3>
            <p className="text-gray-600 mb-4">{productDetails.description}</p>
            <p className="text-lg font-bold text-blue-600">${productDetails.price}</p>
          </div>
        ) : (
          <p>No product details available</p>
        )}
      </div>
    </div>
  );
} 
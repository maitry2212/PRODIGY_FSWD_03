import React from "react";

export default function UserCartWrapper() {
  return (
    <div className="relative">
      <div className="bg-white rounded-lg shadow-lg p-4 min-w-[300px]">
        <h3 className="text-lg font-semibold mb-4">Shopping Cart</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>Sample Item</span>
            <span>$29.99</span>
          </div>
        </div>
        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between items-center font-bold">
            <span>Total:</span>
            <span>$29.99</span>
          </div>
        </div>
      </div>
    </div>
  );
} 
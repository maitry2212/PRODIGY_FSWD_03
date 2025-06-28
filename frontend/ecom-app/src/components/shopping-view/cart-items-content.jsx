import React from "react";

export default function UserCartItemsContent() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Cart Items</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium">Sample Product</p>
            <p className="text-sm text-gray-600">Quantity: 1</p>
          </div>
          <p className="font-bold">$29.99</p>
        </div>
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between items-center font-bold">
          <span>Total:</span>
          <span>$29.99</span>
        </div>
      </div>
    </div>
  );
} 
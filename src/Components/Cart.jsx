import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    onRemove(id);
    toast.error("Removed from cart");
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.info("Cart is already empty");
      return;
    }
    onCheckout();
    toast.success("Checkout successful! Cart cleared.");
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-3xl mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-400 py-12">Your cart is empty.</div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-50 rounded-lg p-4 mb-3"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-gray-500">${item.price}</div>
                </div>
              </div>
              <button
                className="text-pink-500 hover:underline text-xs"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6 font-semibold">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button
            className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-full transition"
            onClick={handleCheckout}
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

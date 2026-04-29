
import React, { useState } from "react";
import products from "../../products.json";
import ProductCard from "./ProductCard";
import { useCart } from "../../contexts/CartContext";
import Cart from "../Cart";

const Products = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="bg-gray-50 py-16 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading and toggle always visible */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Premium Digital Tools</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              className={`btn rounded-full px-6 btn-sm font-semibold transition-colors ${!showCart ? "bg-violet-600 text-white border-none" : "bg-transparent text-gray-700 border border-gray-300"}`}
              onClick={() => setShowCart(false)}
              style={{ boxShadow: !showCart ? "0 2px 8px 0 #a78bfa33" : "none" }}
            >
              Products
            </button>
            <button
              className={`btn rounded-full px-6 btn-sm font-semibold transition-colors ${showCart ? "bg-violet-600 text-white border-none" : "bg-transparent text-gray-700 border border-gray-300"}`}
              onClick={() => setShowCart(true)}
              style={{ boxShadow: showCart ? "0 2px 8px 0 #a78bfa33" : "none" }}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {/* Section toggle below heading/buttons */}
        {!showCart ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <Cart cartItems={cartItems} onRemove={removeFromCart} onCheckout={clearCart} />
        )}
      </div>
    </div>
  );
};

export default Products;
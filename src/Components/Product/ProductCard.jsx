const tagStyles = {
  "popular": "bg-violet-100 text-violet-600",
  "new": "bg-blue-100 text-blue-600",
  "best-seller": "bg-orange-100 text-orange-600",
};


import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { name, description, price, period, tag, tagType, features, icon } = product;
  const { addToCart, cartItems } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (cartItems.find((item) => item.id === product.id)) {
      toast.info("Already in cart");
      return;
    }
    addToCart(product);
    setAdded(true);
    toast.success("Added to cart");
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 relative hover:shadow-lg transition-shadow">
      <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${tagStyles[tagType]}`}>
        {tag}
      </span>

      <div className="text-4xl">{icon}</div>

      <div>
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{description}</p>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-extrabold text-gray-900">${price}</span>
        <span className="text-gray-400 text-sm">/{period}</span>
      </div>

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-violet-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`btn bg-violet-600 hover:bg-violet-700 text-white rounded-full border-none w-full mt-auto ${added ? "opacity-70 cursor-not-allowed" : ""}`}
        onClick={handleAddToCart}
        disabled={added}
      >
        {added ? "Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;
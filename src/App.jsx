import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Stats from './Components/Stats'
import Products from './Components/Product/Products'
import Steps from './Components/Steps'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'
import { CartProvider, useCart } from "./contexts/CartContext";
import Cart from "./Components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

import { useState } from "react";

function AppContent() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => setShowCart(true);
  const handleShowProducts = () => setShowCart(false);

  return (
    <>
      <Navbar onShowCart={handleShowCart} onShowProducts={handleShowProducts} />
      <Banner />
      <Stats />

      {!showCart ? (
        <Products />
      ) : (
        <Cart cartItems={cartItems} onRemove={removeFromCart} onCheckout={clearCart} />
      )}
      <Steps />
      <Pricing />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App

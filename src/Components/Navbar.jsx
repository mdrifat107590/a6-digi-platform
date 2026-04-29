import { useCart } from "../contexts/CartContext";

const Navbar = ({ onShowCart, onShowProducts }) => {
  const { cartItems } = useCart ? useCart() : { cartItems: [] };
  const cartCount = cartItems?.length || 0;
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-12">
      <div className="navbar-start">
        <a className="text-xl font-extrabold text-violet-600">DigiTools</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li><button className="font-medium text-gray-600 hover:text-violet-600 bg-transparent border-none" onClick={onShowProducts}>Products</button></li>
          <li><a className="font-medium text-gray-600 hover:text-violet-600">Features</a></li>
          <li><a className="font-medium text-gray-600 hover:text-violet-600">Pricing</a></li>
          <li><a className="font-medium text-gray-600 hover:text-violet-600">Testimonials</a></li>
          <li><a className="font-medium text-gray-600 hover:text-violet-600">FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <button className="btn btn-ghost btn-circle relative" onClick={onShowCart}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-xs badge-primary absolute -top-1 -right-1 text-white">{cartCount}</span>
        </button>

        <button className="hidden lg:flex btn btn-ghost font-medium text-gray-600">Login</button>

        <button className="btn bg-violet-600 hover:bg-violet-700 text-white rounded-full px-4 lg:px-6 border-none text-sm">
          Get Started
        </button>

        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
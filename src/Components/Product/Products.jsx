import products from "../../products.json";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Premium Digital Tools</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button className="btn bg-violet-600 hover:bg-violet-700 text-white rounded-full px-6 border-none btn-sm">
              Products
            </button>
            <button className="btn btn-outline rounded-full px-6 border-gray-300 text-gray-700 btn-sm">
              Cart (0)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;
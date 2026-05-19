import { ShoppingCart, Star, Eye } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(12); // Initially show 12 products
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // ADD TO CART
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // LOAD MORE PRODUCTS
  const handleLoadMore = () => {
    setIsLoadingMore(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleProducts(prev => prev + 8); // Load 8 more products
      setIsLoadingMore(false);
    }, 500);
  };

  // FETCH PRODUCTS
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const [dummyResponse, escuelaResponse, fakeStoreResponse] = await Promise.all([
          axios.get("https://dummyjson.com/products"),
          axios.get("https://api.escuelajs.co/api/v1/products"),
          axios.get("https://fakestoreapi.com/products"),
        ]);

        // DUMMYJSON PRODUCTS
        const dummyProducts = dummyResponse.data.products;

        // ESCUELA PRODUCTS
        const escuelaProducts = escuelaResponse.data;
        const fakeStoreProducts = fakeStoreResponse.data;

        // ESCUELA FORMAT
        const formattedEscuelaProducts = escuelaProducts.map((product) => ({
          id: product.id + 1000,
          title: product.title,
          description: product.description,
          price: product.price,
          thumbnail: product.images?.[0],
          rating: 4.5,
        }));

        // FAKESTORE FORMAT
        const formattedFakeStoreProducts = fakeStoreProducts.map((product) => ({
          id: product.id + 2000,
          title: product.title,
          description: product.description,
          price: product.price,
          thumbnail: product.image,
          rating: 4.2,
        }));

        // MERGE ALL PRODUCTS
        const allProducts = [...dummyProducts, ...formattedEscuelaProducts, ...formattedFakeStoreProducts];
        setProducts(allProducts);
      } catch (err) {
        setError("Failed to fetch products");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // Get current products to display
  const currentProducts = products.slice(0, visibleProducts);
  const hasMoreProducts = visibleProducts < products.length;

  // LOADING UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Products...</p>
        </div>
      </div>
    );
  }

  // ERROR UI
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-blue-600 text-xs sm:text-sm font-semibold">
            New Arrivals 2026
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-3 sm:mt-4 leading-tight">
            Discover Your Style
          </h1>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed px-4">
            Curated premium collections crafted for modern lifestyles,
            timeless fashion, and everyday luxury.
          </p>
        </div>

        {/* PRODUCTS GRID - 2 columns on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x400?text=No+Image";
                  }}
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Quick View Button */}
                <button className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye size={24} className="text-white" />
                </button>
             
              </div>

              {/* CONTENT */}
              <div className="p-2 sm:p-3 md:p-4">
                {/* RATING */}
                <div className="flex gap-0.5 mb-1 sm:mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="sm:w-3 sm:h-3 md:w-4 md:h-4"
                      fill={i < Math.floor(product.rating || 4) ? "#fbbf24" : "none"}
                      stroke={i < Math.floor(product.rating || 4) ? "#fbbf24" : "#d1d5db"}
                    />
                  ))}
                  <span className="text-[10px] sm:text-xs text-gray-500 ml-1">
                    ({product.rating || 4})
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 line-clamp-1">
                  {product.title.length > 40 ? product.title.substring(0, 40) + "..." : product.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1 line-clamp-2 hidden sm:block">
                  {product.description?.substring(0, 60)}...
                </p>

                {/* PRICE */}
                <div className="mt-2 sm:mt-3 flex items-center justify-between">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600">
                    ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                  </p>
                  <span className="text-green-600 text-[10px] sm:text-xs font-medium">
                    In Stock
                  </span>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-2 mt-2 sm:mt-3">
                  {/* BUY NOW */}
                  <Link
  to={`/product/${product.id}`}
  className="flex-1 bg-gray-900 text-white py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm font-medium hover:bg-blue-600 transition-colors text-center"
>
  Buy Now
</Link>
                  {/* ADD TO CART */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="p-1.5 sm:p-2 border border-gray-300 rounded-lg hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE BUTTON */}
        {hasMoreProducts && (
          <div className="text-center mt-10 sm:mt-12 md:mt-16">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white border-2 border-gray-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
            >
              {isLoadingMore ? (
                <>
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </>
              ) : (
                `Load More (${products.length - visibleProducts} left)`
              )}
            </button>
          </div>
        )}

        {/* Show all products message */}
        {!hasMoreProducts && products.length > 0 && (
          <div className="text-center mt-10 sm:mt-12 md:mt-16">
            <p className="text-gray-500 text-sm">
              🎉 You've seen all {products.length} products!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
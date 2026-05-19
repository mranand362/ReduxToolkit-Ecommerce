import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Star, Heart, Share2, Truck, Shield, RotateCcw, ChevronLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // FETCH SINGLE PRODUCT
  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
        setSelectedImage(response.data.thumbnail);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity: quantity };
    dispatch(addToCart(productWithQuantity));
  };

  const increaseQuantity = () => {
    if (quantity < product?.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // LOADING
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">Product not found</p>
          <Link to="/products" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="text-sm">Back to Products</span>
        </Link>

        {/* Product Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
            
            {/* LEFT SIDE - IMAGES */}
            <div>
              {/* Main Image */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4">
                <img
                  src={selectedImage || product.thumbnail}
                  alt={product.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              {product.images && product.images.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  <div 
                    onClick={() => setSelectedImage(product.thumbnail)}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 ${selectedImage === product.thumbnail ? 'border-blue-600' : 'border-transparent'}`}
                  >
                    <img src={product.thumbnail} alt="thumb" className="w-full h-16 object-cover" />
                  </div>
                  {product.images.slice(0, 3).map((img, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 ${selectedImage === img ? 'border-blue-600' : 'border-transparent'}`}
                    >
                      <img src={img} alt={`thumb ${idx}`} className="w-full h-16 object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT SIDE - CONTENT */}
            <div className="flex flex-col">
              {/* Category Badge */}
              <p className="text-blue-600 font-semibold uppercase tracking-[3px] text-xs sm:text-sm">
                {product.category || "Premium Product"}
              </p>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="sm:w-5 sm:h-5"
                      fill={i < Math.floor(product.rating) ? "#facc15" : "none"}
                      stroke="#facc15"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews?.length || 0} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-4">
                <span className="text-3xl sm:text-4xl font-bold text-blue-600">
                  ${product.price}
                </span>
                {product.discountPercentage && (
                  <span className="ml-3 text-sm text-green-600 font-medium">
                    {product.discountPercentage}% OFF
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="mt-3">
                {product.stock > 0 ? (
                  <p className="text-green-600 font-medium text-sm">
                    ✓ In Stock ({product.stock} available)
                  </p>
                ) : (
                  <p className="text-red-600 font-medium text-sm">✗ Out of Stock</p>
                )}
              </div>

              {/* Description Tabs */}
              <div className="mt-6">
                <div className="flex gap-4 border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab("description")}
                    className={`pb-2 text-sm font-medium transition-colors ${
                      activeTab === "description" 
                        ? "text-blue-600 border-b-2 border-blue-600" 
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab("details")}
                    className={`pb-2 text-sm font-medium transition-colors ${
                      activeTab === "details" 
                        ? "text-blue-600 border-b-2 border-blue-600" 
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Details
                  </button>
                </div>
                <div className="mt-4">
                  {activeTab === "description" ? (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  ) : (
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Brand: {product.brand || "ShopEase"}</li>
                      <li>• Category: {product.category}</li>
                      <li>• SKU: {product.sku || "N/A"}</li>
                      <li>• Weight: {product.weight || "N/A"} kg</li>
                    </ul>
                  )}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-700 mb-2">Quantity:</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="px-3 py-2 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-gray-900 min-w-[50px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      disabled={quantity >= product.stock}
                      className="px-3 py-2 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
               <button
  onClick={() => {
    dispatch(addToCart(product));
    navigate("/checkout");
  }}
  className="flex-1 bg-gray-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
>
  Buy Now
</button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <Truck size={20} className="text-blue-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield size={20} className="text-blue-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Secure Payment</p>
                </div>
                <div className="text-center">
                  <RotateCcw size={20} className="text-blue-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
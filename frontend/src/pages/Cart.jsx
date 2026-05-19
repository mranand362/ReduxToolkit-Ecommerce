import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/cartSlice";

const Cart = () => {
  // Redux se cart data lena
  const cartItems = useSelector((state) => state.cartStore.cart);
  
  // Dispatch
  const dispatch = useDispatch();

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  const shipping = totalPrice > 50 ? 0 : 5.99;
  const tax = totalPrice * 0.1;
  const grandTotal = totalPrice + shipping + tax;

  return (
    <section className="bg-gray-50 py-8 md:py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-500 mt-1">{cartItems.length} items in your cart</p>
        </div>

        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag size={32} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your Cart is Empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any items yet</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Shopping
              <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* LEFT SIDE - Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow"
                >
                  {/* Two column layout on mobile */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Left Column - Image */}
                    <div className="flex flex-col items-center">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full max-w-[150px] h-auto object-contain rounded-lg"
                      />
                    </div>

                    {/* Right Column - Details */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <h2 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-2">
                          {item.title}
                        </h2>
                        <p className="text-gray-500 text-xs md:text-sm mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-3">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg md:text-xl font-bold text-blue-600">
                            ${item.price}
                          </span>
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="text-red-500 hover:text-red-700 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                            <button
                              onClick={() => dispatch(decreaseQty(item.id))}
                              className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 transition-colors text-gray-600"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-3 py-1.5 text-sm font-medium text-gray-700 min-w-[40px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => dispatch(increaseQty(item.id))}
                              className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 transition-colors text-gray-600"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE - Order Summary */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-xl shadow-sm p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
                  Order Summary
                </h2>

                {/* Price Details */}
                <div className="space-y-3 border-b border-gray-100 pb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-900">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className={shipping === 0 ? "text-green-600 font-semibold" : "text-gray-900"}>
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (10%)</span>
                    <span className="font-semibold text-gray-900">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between mt-5 pt-2">
                  <span className="text-lg md:text-xl font-bold text-gray-900">Total</span>
                  <span className="text-xl md:text-2xl font-bold text-blue-600">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>

                {/* Free Shipping Message */}
                {totalPrice < 50 && (
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    Add ${(50 - totalPrice).toFixed(2)} more for free shipping
                  </p>
                )}

                {/* Checkout Button */}
                <Link
                  to="/checkout"
                  className="block w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Proceed to Checkout
                </Link>

                {/* Continue Shopping */}
                <Link
                  to="/products"
                  className="block w-full mt-3 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center text-gray-700"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
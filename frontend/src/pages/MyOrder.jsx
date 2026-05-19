import { useEffect, useState } from "react";
import API from "../api/api";
import { Package, Truck, CheckCircle, Clock, XCircle,  ChevronRight } from "lucide-react";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  // FETCH ORDERS
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));

        console.log("Fetching orders...");
        console.log("User:", user);
        console.log("Token:", token);

        const response = await API.get("/api/orders/myorders", {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
        console.log("API Response:", response.data);

        let ordersData = [];
        if (Array.isArray(response.data)) {
          ordersData = response.data;
        } else if (response.data.orders && Array.isArray(response.data.orders)) {
          ordersData = response.data.orders;
        } else if (response.data.data && Array.isArray(response.data.data)) {
          ordersData = response.data.data;
        }

        setOrders(ordersData);
        
      } catch (err) {
        console.error("Error details:", err);
        if (err.response?.status === 401) {
          setError("Please login again to view your orders");
        } else if (err.response?.status === 404) {
          setError("Orders endpoint not found. Please check backend API");
        } else {
          setError(err.response?.data?.message || err.message || "Failed to load orders");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getStatusIcon = (status) => {
    switch(status?.toLowerCase()) {
      case 'delivered':
        return <CheckCircle size={18} className="text-green-600" />;
      case 'shipped':
        return <Truck size={18} className="text-blue-600" />;
      case 'pending':
        return <Clock size={18} className="text-yellow-600" />;
      case 'cancelled':
        return <XCircle size={18} className="text-red-600" />;
      default:
        return <Package size={18} className="text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'shipped':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // LOADING
  if (loading) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-6 text-gray-600 font-medium">Loading your orders...</p>
        </div>
      </div>
    );
  }

  // ERROR
  if (error) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md transform transition-all">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">⚠️</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Unable to Load Orders</h3>
          <p className="text-red-500 mb-6">{error}</p>
          <div className="flex gap-3 justify-center">
            <button 
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Try Again
            </button>
            <a
              href="/products"
              className="px-5 py-2.5 bg-gray-600 text-white rounded-xl font-medium hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">My Orders</h1>
              <p className="text-gray-600">Track and manage all your orders in one place</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm px-6 py-3">
              <span className="text-2xl font-bold text-blue-600">{orders.length}</span>
              <span className="text-gray-600 ml-2">Total Orders</span>
            </div>
          </div>
        </div>

        {orders.length === 0 ? (
          // Empty State
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center transform transition-all">
            <div className="w-28 h-28 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package size={48} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Orders Yet</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              You haven't placed any orders yet. Start shopping to see your orders here!
            </p>
            <a 
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Shopping
              <ChevronRight size={18} />
            </a>
          </div>
        ) : (
          // Orders List
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-blue-600">
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-green-600">
                <p className="text-sm text-gray-600">Delivered</p>
                <p className="text-2xl font-bold text-green-600">
                  {orders.filter(o => o.status === "Delivered").length}
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-yellow-600">
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {orders.filter(o => o.status === "Pending").length}
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-purple-600">
                <p className="text-sm text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-purple-600">
                  ${orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Orders */}
            {orders.map((order) => (
              <div 
                key={order._id || order.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                {/* Order Header */}
                <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-b border-gray-200">
                  <div className="flex flex-wrap justify-between items-center gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Order ID</p>
                      <p className="text-sm font-mono font-semibold text-gray-900">
                        #{order._id?.slice(-8) || order.id?.slice(-8)}
                      </p>
                      {order.createdAt && (
                        <p className="text-xs text-gray-400">
                          {new Date(order.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="text-sm font-medium capitalize">{order.status || "Pending"}</span>
                      </div>
                      <button
                        onClick={() => setSelectedOrder(selectedOrder === order._id ? null : order._id)}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                      >
                        {selectedOrder === order._id ? "Hide Details" : "View Details"}
                        <ChevronRight size={16} className={`transition-transform ${selectedOrder === order._id ? "rotate-90" : ""}`} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="px-6 py-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Items</p>
                      <p className="font-medium text-gray-900">
                        {(order.products || order.items || []).length} products
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Total Amount</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${(order.totalAmount || order.total || order.totalPrice)?.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order Details (Expandable) */}
                {selectedOrder === order._id && (
                  <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 animate-fadeIn">
                    <h4 className="font-semibold text-gray-900 mb-3">Order Items</h4>
                    <div className="space-y-2">
                      {(order.products || order.items || []).map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">
                              {item.product?.title || item.title || item.name}
                            </p>
                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                          </div>
                          <p className="font-semibold text-gray-900">
                            ${((item.product?.price || item.price) * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Shipping Address */}
                    {order.shippingAddress && (
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Shipping Address</h4>
                        <p className="text-sm text-gray-600">
                          {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
                          {order.shippingAddress.street}<br />
                          {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}<br />
                          {order.shippingAddress.country}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MyOrder;
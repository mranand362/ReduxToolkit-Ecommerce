import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle,

  Truck,
  Shield,
  CreditCard,
  Headphones
} from "lucide-react";

const Home = () => {
  // Features data
  const features = [
    { icon: Truck, title: "Free Shipping", description: "On orders over $50" },
    { icon: Shield, title: "Secure Payment", description: "100% encrypted" },
    { icon: CreditCard, title: "Easy Returns", description: "30-day policy" },
    { icon: Headphones, title: "24/7 Support", description: "Dedicated team" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-16 md:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full mb-4 md:mb-6 mx-auto lg:mx-0">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-blue-600">Welcome to ShopEase</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Discover Your
                <span className="block sm:inline bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  {" "}Perfect Style
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Shop the latest trends in electronics, fashion, and home decor. 
                Quality products, fast delivery, and exceptional service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
                >
                  Shop Now
                  <ArrowRight size={18} className="md:w-5 md:h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-gray-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 text-sm md:text-base"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mt-6 md:mt-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="md:w-5 md:h-5 text-green-600" />
                  <span className="text-xs md:text-sm text-gray-600">30-Day Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="md:w-5 md:h-5 text-green-600" />
                  <span className="text-xs md:text-sm text-gray-600">Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="md:w-5 md:h-5 text-green-600" />
                  <span className="text-xs md:text-sm text-gray-600">1M+ Happy Customers</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10 max-w-sm md:max-w-md lg:max-w-full mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=600&fit=crop"
                  alt="Shopping"
                  className="rounded-2xl md:rounded-3xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-32 h-32 md:w-48 md:h-48 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-32 h-32 md:w-48 md:h-48 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon size={22} className="md:w-6 md:h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
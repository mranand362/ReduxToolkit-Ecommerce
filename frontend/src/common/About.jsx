
import { 
  Shield, 
  Truck, 
  CreditCard, 
  Headphones, 
  Globe, 
  Target,
  Eye,
 
  CheckCircle
} from "lucide-react";

const About = () => {
  // Company metrics
  const metrics = [
    { value: "500K+", label: "Happy Customers" },
    { value: "50+", label: "Countries" },
    { value: "10K+", label: "Products" },
    { value: "99.9%", label: "Satisfaction" }
  ];

  // Core values
  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and payments are always protected with enterprise-grade security."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Lightning-fast shipping with real-time tracking on every order."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer support team available around the clock."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers across 50+ countries worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About ShopEasy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're building the future of ecommerce — making online shopping 
              seamless, secure, and enjoyable for millions of customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2020, ShopEase started with a simple idea: create an ecommerce platform 
                that puts customers first. What began as a small team of passionate individuals has 
                grown into a trusted destination for millions of shoppers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, we're proud to partner with thousands of brands to bring the best products 
                directly to your doorstep. Our commitment to quality, security, and exceptional 
                service remains at the heart of everything we do.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <CheckCircle size={20} />
                <span className="font-medium">Trusted by 500,000+ customers</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="ShopEase team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Target size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide a seamless, secure, and delightful shopping experience 
                that empowers customers to find exactly what they need, when they need it.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Eye size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted ecommerce platform, known for 
                exceptional quality, reliability, and customer-first innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <Truck size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Free Shipping</h3>
                <p className="text-gray-600 text-sm">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Secure Payments</h3>
                <p className="text-gray-600 text-sm">100% encrypted transactions</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CreditCard size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Easy Returns</h3>
                <p className="text-gray-600 text-sm">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;
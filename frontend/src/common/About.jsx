
import {
  Shield,
  Truck,
  CreditCard,
  Headphones,
  Globe,
  Target,
  Eye,
  CheckCircle,
} from "lucide-react";

const About = () => {
  const metrics = [
    { value: "500K+", label: "Happy Customers" },
    { value: "50+", label: "Countries" },
    { value: "10K+", label: "Products" },
    { value: "99.9%", label: "Satisfaction" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Enterprise-grade security for complete protection.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Lightning-fast shipping with live tracking.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Dedicated support team always available.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Serving customers in 50+ countries.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold text-white mb-6">
            About ShopEasy
          </h1>

          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Building the future of online shopping with secure payments,
            premium products, and world-class customer experience.
          </p>

        </div>
      </section>

      {/* Metrics */}
      <section className="-mt-10">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <h2 className="text-3xl font-bold text-blue-600">
                    {metric.value}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {metric.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <h2 className="text-4xl font-bold mb-6">
                Our Story
              </h2>

              <p className="text-gray-600 mb-5 leading-7">
                Founded in 2020, ShopEasy started with one mission:
                make online shopping easier, safer, and faster.
              </p>

              <p className="text-gray-600 mb-6 leading-7">
                Today, we partner with thousands of brands and
                serve millions of customers worldwide.
              </p>

              <div className="flex items-center gap-3 text-blue-600 font-medium">
                <CheckCircle size={20} />
                Trusted by 500,000+ customers
              </div>

            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="team"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-8 rounded-2xl shadow-md border hover:shadow-xl transition">

              <div className="bg-blue-100 w-14 h-14 rounded-xl flex justify-center items-center mb-5">
                <Target className="text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Our Mission
              </h3>

              <p className="text-gray-600">
                To provide seamless shopping experiences through
                innovation and customer-first solutions.
              </p>

            </div>

            <div className="p-8 rounded-2xl shadow-md border hover:shadow-xl transition">

              <div className="bg-blue-100 w-14 h-14 rounded-xl flex justify-center items-center mb-5">
                <Eye className="text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Our Vision
              </h3>

              <p className="text-gray-600">
                To become the world's most trusted ecommerce platform.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Values */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold">
              Our Core Values
            </h2>

            <p className="text-gray-500 mt-3">
              The principles that drive our company
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
                >

                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex justify-center items-center mb-5">
                    <Icon
                      size={24}
                      className="text-blue-600"
                    />
                  </div>

                  <h3 className="text-lg font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="bg-white py-14">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10">

            <div className="flex gap-4">

              <Truck className="text-blue-600" size={30} />

              <div>
                <h3 className="font-bold">
                  Free Shipping
                </h3>

                <p className="text-gray-500">
                  Orders over $50
                </p>
              </div>

            </div>

            <div className="flex gap-4">

              <Shield className="text-blue-600" size={30} />

              <div>
                <h3 className="font-bold">
                  Secure Payments
                </h3>

                <p className="text-gray-500">
                  100% encrypted transactions
                </p>
              </div>

            </div>

            <div className="flex gap-4">

              <CreditCard className="text-blue-600" size={30} />

              <div>
                <h3 className="font-bold">
                  Easy Returns
                </h3>

                <p className="text-gray-500">
                  30-day return policy
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;
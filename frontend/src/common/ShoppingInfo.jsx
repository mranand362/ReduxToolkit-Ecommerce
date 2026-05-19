import { Truck, Clock, Globe, Package, MapPin, DollarSign } from "lucide-react";

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <Truck size={48} className="text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shipping Information</h1>
          <p className="text-gray-600">Fast, reliable delivery to your doorstep</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <Clock size={32} className="text-blue-600 mb-3" />
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Delivery Times</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Standard: 3-5 business days</li>
                <li>• Express: 1-2 business days</li>
                <li>• Overnight: Next business day</li>
                <li>• International: 7-14 business days</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <DollarSign size={32} className="text-green-600 mb-3" />
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Shipping Rates</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Free shipping on orders $50+</li>
                <li>• Standard: $5.99</li>
                <li>• Express: $12.99</li>
                <li>• Overnight: $24.99</li>
              </ul>
            </div>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Package size={20} className="text-blue-600" />
              Order Processing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Orders are processed within 1-2 business days. You will receive a confirmation 
              email with tracking information once your order ships.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Globe size={20} className="text-blue-600" />
              International Shipping
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We ship to over 50 countries worldwide. International shipping costs and delivery 
              times vary by destination.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Please note: International orders may be subject to customs duties and taxes, 
              which are the responsibility of the customer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <MapPin size={20} className="text-blue-600" />
              Tracking Your Order
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Once your order ships, you'll receive a tracking number via email. You can also 
              track your order by logging into your account and visiting "My Orders".
            </p>
          </section>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h2 className="font-semibold text-gray-900 mb-2">Important Notes</h2>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Business days exclude weekends and holidays</li>
              <li>• Delivery times are estimates and not guaranteed</li>
              <li>• Signature may be required for delivery</li>
              <li>• PO Box addresses not accepted for expedited shipping</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
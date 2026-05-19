import { FileText, ShoppingBag, CreditCard, RotateCcw, Shield, AlertCircle } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <FileText size={48} className="text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-gray-600">Effective date: January 1, 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <ShoppingBag size={20} className="text-blue-600" />
              Account Registration
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To use our services, you must create an account. You agree to provide accurate, 
              current, and complete information. You are responsible for maintaining the 
              confidentiality of your account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <CreditCard size={20} className="text-blue-600" />
              Orders & Payments
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>All orders are subject to acceptance and availability</li>
              <li>Prices are subject to change without notice</li>
              <li>Payment must be received before order processing</li>
              <li>We reserve the right to refuse any order</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <RotateCcw size={20} className="text-blue-600" />
              Shipping & Delivery
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Estimated delivery times are provided as guidelines only. We are not responsible 
              for delays caused by shipping carriers or customs. Risk of loss transfers to you 
              upon delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <RotateCcw size={20} className="text-blue-600" />
              Returns & Refunds
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Returns are accepted within 30 days of delivery. Items must be unused and in 
              original packaging. Refunds will be issued to the original payment method within 
              5-7 business days of return receipt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Shield size={20} className="text-blue-600" />
              Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content on this site, including text, graphics, logos, and images, is the 
              property of ShopEase and protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <AlertCircle size={20} className="text-blue-600" />
              Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ShopEase shall not be liable for any indirect, incidental, or consequential damages 
              arising from the use of our products or services.
            </p>
          </section>

          <section className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-semibold text-gray-900 mb-2">Changes to Terms</h2>
            <p className="text-gray-600 text-sm">
              We reserve the right to update these terms at any time. Continued use of our 
              services constitutes acceptance of the updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
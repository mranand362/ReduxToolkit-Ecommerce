import { RotateCcw, CheckCircle, Clock, CreditCard, Package, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Returns = () => {
  const steps = [
    { icon: Package, title: "Initiate Return", description: "Log into your account and select the item to return" },
    { icon: CheckCircle, title: "Get Approval", description: "Receive return authorization via email" },
    { icon: Package, title: "Pack & Ship", description: "Package item securely with original packaging" },
    { icon: CreditCard, title: "Get Refund", description: "Refund processed within 5-7 business days" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <RotateCcw size={48} className="text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Returns & Refunds</h1>
          <p className="text-gray-600">30-day hassle-free return policy</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-8">
          {/* Return Steps */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">How to Return an Item</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {steps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <step.icon size={24} className="text-blue-600" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{step.title}</div>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Clock size={20} className="text-blue-600" />
              Return Policy
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>30-day return window from date of delivery</li>
              <li>Items must be unused and in original packaging</li>
              <li>Original tags must be attached</li>
              <li>Proof of purchase required</li>
              <li>Final sale items are not eligible for return</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <CreditCard size={20} className="text-blue-600" />
              Refund Process
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Once we receive your return, we'll inspect the item and process your refund within 
              5-7 business days. Refunds will be issued to the original payment method.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800 text-sm">✓ Free return shipping on defective items</p>
              <p className="text-green-800 text-sm mt-1">✓ Refunds include original shipping costs for defective items</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Package size={20} className="text-blue-600" />
              Non-Returnable Items
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Gift cards</li>
              <li>Personalized or custom items</li>
              <li>Intimate apparel (for hygiene reasons)</li>
              <li>Final sale items</li>
              <li>Downloadable software</li>
            </ul>
          </section>

          <div className="bg-blue-50 p-5 rounded-xl">
            <h2 className="font-semibold text-gray-900 mb-3">Need Help?</h2>
            <p className="text-gray-600 text-sm mb-3">
              Have questions about returns? Our customer support team is here to help.
            </p>
            <div className="flex gap-3">
              <Link to="/contact" className="text-blue-600 font-medium text-sm">
                Contact Support →
              </Link>
              <Link to="/help" className="text-blue-600 font-medium text-sm">
                Visit Help Center →
              </Link>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-semibold text-gray-900 mb-1">Holiday Returns</h2>
                <p className="text-sm text-gray-600">
                  Items purchased between November 1 and December 25 can be returned until January 31.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;
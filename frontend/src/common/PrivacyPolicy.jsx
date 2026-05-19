import { Shield, Lock, Eye, Database, Cookie, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <Shield size={48} className="text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 1, 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Lock size={20} className="text-blue-600" />
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact customer support. This may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Name, email address, phone number</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information (processed securely)</li>
              <li>Order history and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Database size={20} className="text-blue-600" />
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Process and fulfill your orders</li>
              <li>Communicate about your account and orders</li>
              <li>Improve our products and services</li>
              <li>Send promotional offers (with your consent)</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Cookie size={20} className="text-blue-600" />
              Cookies & Tracking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, 
              and personalize content. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Eye size={20} className="text-blue-600" />
              Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your personal information. 
              All payment transactions are encrypted using SSL technology.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Mail size={20} className="text-blue-600" />
              Your Rights
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-semibold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-gray-600 text-sm">
              If you have questions about this Privacy Policy, please contact us at:<br />
              Email: privacy@shopease.com<br />
              Address: 123 Commerce Street, San Francisco, CA 94105
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
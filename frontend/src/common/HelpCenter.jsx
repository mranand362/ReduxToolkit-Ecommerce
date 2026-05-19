import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  ChevronRight, 
  MessageCircle, 
  Mail, 
  Phone,
  Truck,
  RotateCcw,

  CreditCard,
  Package,
  User,
  Lock,
  AlertCircle,
  HelpCircle,
 
  Clock,
 
  ArrowRight,
  Headphones,
  FileText,

} from "lucide-react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  const faqCategories = [
    { id: "all", name: "All Topics", icon: HelpCircle, color: "blue" },
    { id: "orders", name: "Orders", icon: Package, color: "purple" },
    { id: "shipping", name: "Shipping", icon: Truck, color: "green" },
    { id: "returns", name: "Returns", icon: RotateCcw, color: "orange" },
    { id: "payments", name: "Payments", icon: CreditCard, color: "red" },
    { id: "account", name: "Account", icon: User, color: "indigo" }
  ];

  const faqs = [
    {
      id: 1,
      category: "orders",
      question: "How do I track my order?",
      answer: "You can track your order in two ways:\n\n1. Login to your account and go to 'My Orders'\n2. Click the tracking link sent to your email\n3. Enter your order number on our tracking page\n\nYou'll receive real-time updates on your delivery status."
    },
    {
      id: 2,
      category: "orders",
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled within 1 hour of placement. To cancel:\n\n• Go to 'My Orders' in your account\n• Click 'Cancel Order' if available\n• Contact support immediately for modifications\n\nAfter 1 hour, the order enters processing and cannot be changed."
    },
    {
      id: 3,
      category: "orders",
      question: "What if I receive a wrong or damaged item?",
      answer: "We're sorry for the inconvenience! Please contact us within 48 hours of delivery with:\n\n• Your order number\n• Photos of the item\n• Description of the issue\n\nWe'll arrange a replacement or refund immediately."
    },
    {
      id: 4,
      category: "shipping",
      question: "How long does shipping take?",
      answer: "Shipping times vary by location:\n\n• Standard Shipping: 3-5 business days\n• Express Shipping: 1-2 business days\n• Overnight: Next business day\n• International: 7-14 business days\n\nFree shipping on all orders over $50!"
    },
    {
      id: 5,
      category: "shipping",
      question: "Do you ship internationally?",
      answer: "Yes! We ship to over 50 countries worldwide. International shipping costs are calculated at checkout. Please note:\n\n• Delivery times vary by country\n• Customs fees may apply (customer responsibility)\n• Tracking available for all international orders"
    },
    {
      id: 6,
      category: "shipping",
      question: "Can I change my shipping address?",
      answer: "Address changes are possible within 1 hour of order placement. After that, please contact our support team immediately. We cannot guarantee address changes once the order is processed."
    },
    {
      id: 7,
      category: "returns",
      question: "What is your return policy?",
      answer: "We offer a 30-day hassle-free return policy:\n\n• Items must be unused and in original packaging\n• All tags must be attached\n• Proof of purchase required\n• Free returns on defective items\n• Refund processed within 5-7 business days"
    },
    {
      id: 8,
      category: "returns",
      question: "How do I initiate a return?",
      answer: "To start a return:\n\n1. Login to your account\n2. Go to 'My Orders'\n3. Select 'Return Item'\n4. Choose reason for return\n5. Print return label\n6. Ship item back\n\nYou'll receive confirmation once we process your return."
    },
    {
      id: 9,
      category: "returns",
      question: "How long until I get my refund?",
      answer: "Refunds are processed within 5-7 business days after we receive your return. Timeline:\n\n• Return received: 1-2 days\n• Inspection: 2-3 days\n• Refund processing: 3-5 days\n\nYou'll receive email confirmation at each step."
    },
    {
      id: 10,
      category: "payments",
      question: "What payment methods do you accept?",
      answer: "We accept multiple payment methods:\n\n• Credit/Debit Cards (Visa, Mastercard, Amex)\n• PayPal\n• Apple Pay\n• Google Pay\n• Shop Pay\n\nAll payments are secure and encrypted."
    },
    {
      id: 11,
      category: "payments",
      question: "Is my payment information secure?",
      answer: "Absolutely! We use industry-standard security:\n\n• SSL encryption for all transactions\n• PCI compliant payment processing\n• No storage of full card details\n• 3D Secure authentication\n\nYour security is our top priority."
    },
    {
      id: 12,
      category: "payments",
      question: "When will I be charged?",
      answer: "Payment is authorized immediately but only captured when your order ships. For pre-orders, you'll be charged at time of shipment."
    },
    {
      id: 13,
      category: "account",
      question: "How do I reset my password?",
      answer: "To reset your password:\n\n1. Click 'Forgot Password' on login page\n2. Enter your email address\n3. Check email for reset link\n4. Create new password\n\nContact support if you don't receive the email."
    },
    {
      id: 14,
      category: "account",
      question: "How do I delete my account?",
      answer: "To delete your account:\n\n1. Go to Account Settings\n2. Click 'Delete Account'\n3. Confirm your decision\n\nNote: This action is permanent and cannot be undone. Your data will be removed within 30 days."
    },
    {
      id: 15,
      category: "account",
      question: "How do I update my profile information?",
      answer: "Update your profile anytime:\n\n1. Login to your account\n2. Go to 'Account Settings'\n3. Edit your information\n4. Save changes\n\nChanges apply immediately to future orders."
    }
  ];

  const popularTopics = [
    { title: "Tracking Orders", icon: Package, link: "#" },
    { title: "Return Policy", icon: RotateCcw, link: "#" },
    { title: "Payment Methods", icon: CreditCard, link: "#" },
    { title: "Shipping Times", icon: Clock, link: "#" }
  ];

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const filteredBySearch = searchQuery 
    ? filteredFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs;

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Headphones size={16} className="text-white" />
            <span className="text-sm font-medium text-white">24/7 Support Available</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How can we help you?
          </h1>
          <p className="text-blue-100 text-lg mb-8">
            Find answers to common questions or contact our support team
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for answers, topics, or questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-none shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900 placeholder-gray-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Topics</h2>
          <p className="text-gray-600">Most frequently asked questions</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularTopics.map((topic, idx) => (
            <a
              key={idx}
              href={topic.link}
              className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors">
                <topic.icon size={24} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <span className="text-sm font-medium text-gray-900">{topic.title}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <category.icon size={16} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        {filteredBySearch.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl">
            <AlertCircle size={48} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500 mb-6">We couldn't find any answers matching your search.</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredBySearch.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <ChevronRight 
                    size={18} 
                    className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      openFaq === faq.id ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {openFaq === faq.id && (
                  <div className="px-5 pb-5 pt-0 text-gray-600 border-t border-gray-100">
                    <div className="whitespace-pre-line">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Quick Actions */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Still need help?</h2>
            <p className="text-gray-600">Our support team is ready to assist you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={28} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm mb-4">Chat with our support team instantly</p>
              <button className="text-blue-600 font-medium text-sm inline-flex items-center gap-1">
                Start Chat <ArrowRight size={14} />
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={28} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm mb-2">support@shopease.com</p>
              <p className="text-gray-500 text-xs mb-4">Response within 24 hours</p>
              <button className="text-blue-600 font-medium text-sm inline-flex items-center gap-1">
                Send Email <ArrowRight size={14} />
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={28} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 text-sm mb-2">+1 (555) 123-4567</p>
              <p className="text-gray-500 text-xs mb-4">Mon-Fri, 9am-6pm EST</p>
              <button className="text-blue-600 font-medium text-sm inline-flex items-center gap-1">
                Call Now <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Link to="/shipping" className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
              <Truck size={24} className="text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Shipping Info</p>
                <p className="text-xs text-gray-500">Delivery times & rates</p>
              </div>
            </Link>
            <Link to="/returns" className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
              <RotateCcw size={24} className="text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Returns Policy</p>
                <p className="text-xs text-gray-500">30-day easy returns</p>
              </div>
            </Link>
            <Link to="/privacy" className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
              <Lock size={24} className="text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Privacy Policy</p>
                <p className="text-xs text-gray-500">Your data security</p>
              </div>
            </Link>
            <Link to="/terms" className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
              <FileText size={24} className="text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Terms & Conditions</p>
                <p className="text-xs text-gray-500">Our terms of service</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
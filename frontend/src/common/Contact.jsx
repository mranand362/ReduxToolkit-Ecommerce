import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Building2,
  Globe
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    department: "general",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const departments = [
    { value: "general", label: "General Inquiry" },
    { value: "sales", label: "Sales & Partnerships" },
    { value: "support", label: "Customer Support" },
    { value: "press", label: "Press & Media" },
    { value: "careers", label: "Careers" }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        department: "general",
        subject: "",
        message: ""
      });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactChannels = [
    {
      icon: Mail,
      title: "Email Support",
      primary: "support@shopease.com",
      secondary: "sales@shopease.com",
      tertiary: "press@shopease.com",
      action: "mailto:support@shopease.com",
      description: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      primary: "+1 (555) 123-4567",
      secondary: "Toll Free: 1-800-SHOPEASE",
      tertiary: "Mon-Fri, 9am-6pm EST",
      action: "tel:+15551234567",
      description: "Enterprise clients available 24/7"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      primary: "123 Commerce Street",
      secondary: "San Francisco, CA 94105",
      tertiary: "United States",
      action: "#",
      description: "Visit by appointment only"
    },
    {
      icon: Building2,
      title: "EMEA Office",
      primary: "45 Shoreditch High Street",
      secondary: "London, EC2A 3DP",
      tertiary: "United Kingdom",
      action: "#",
      description: "Sales & Support available"
    }
  ];

  const supportOptions = [
    {
      title: "Technical Support",
      description: "Having technical issues? Our engineering team is ready to help.",
      link: "#",
      availability: "24/7 Priority Support"
    },
    {
      title: "Sales Inquiry",
      description: "Interested in enterprise solutions? Contact our sales team.",
      link: "#",
      availability: "Response within 4 hours"
    },
    {
      title: "Partnerships",
      description: "Join our merchant network and grow your business with ShopEase.",
      link: "#",
      availability: "Dedicated partnership manager"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Professional */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-6">
              <MessageSquare size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Contact our team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions about ShopEase? We're here to help. Our dedicated support team 
              is available to assist you with any inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactChannels.map((channel, idx) => (
              <div key={idx} className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <channel.icon size={24} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{channel.title}</h3>
                <div className="space-y-1 mb-3">
                  <p className="text-gray-900 font-medium text-sm">{channel.primary}</p>
                  <p className="text-gray-600 text-sm">{channel.secondary}</p>
                  <p className="text-gray-500 text-xs">{channel.tertiary}</p>
                </div>
                <p className="text-xs text-blue-600 font-medium">{channel.description}</p>
                <a 
                  href={channel.action}
                  className="inline-block mt-3 text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  Get in touch →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Support Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - Main */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-gray-600 mb-6">Fill out the form and we'll respond within 24 hours.</p>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-600" />
                    <div>
                      <p className="text-green-700 font-medium">Message sent successfully!</p>
                      <p className="text-green-600 text-sm">Our team will get back to you shortly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          errors.fullName ? "border-red-300 bg-red-50" : "border-gray-300"
                        }`}
                        placeholder="John Smith"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.fullName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                        }`}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                    >
                      {departments.map(dept => (
                        <option key={dept.value} value={dept.value}>{dept.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                        errors.message ? "border-red-300 bg-red-50" : "border-gray-300"
                      }`}
                      placeholder="Please provide as much detail as possible..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Support Options Sidebar */}
            <div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={22} className="text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Quick Support</h3>
                </div>
                <div className="space-y-4">
                  {supportOptions.map((option, idx) => (
                    <div key={idx} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-1">{option.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{option.availability}</span>
                        <a href={option.link} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                          Contact →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-6 text-white">
                <Clock size={28} className="mb-3" />
                <h3 className="text-xl font-bold mb-2">Emergency Support</h3>
                <p className="text-blue-100 text-sm mb-4">
                  For critical issues affecting your business operations, our emergency support team is available 24/7.
                </p>
                <div className="text-2xl font-bold mb-1">+1 (555) 999-8888</div>
                <p className="text-blue-100 text-xs">Priority hotline for enterprise clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Contact;
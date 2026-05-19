import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {  Mail, LogOut, ShoppingBag} from "lucide-react";

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get user data from localStorage
  useEffect(() => {
    const fetchUserData = () => {
      try {
        const userData = localStorage.getItem("user");
        
        if (!userData) {
          navigate("/login", { replace: true });
          return;
        }
        
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/login", { replace: true });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");
    navigate("/login", { replace: true });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 text-center">
                <div className="inline-block">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-3xl font-bold text-blue-600">
                      {user.fullName?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-white mt-4">
                  {user.fullName}
                </h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={18} className="text-gray-400" />
                  <span className="text-sm">{user.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Card */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                <Link
                  to="/myorders"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag size={20} className="text-blue-600" />
                    <span className="font-medium text-gray-900">My Orders</span>
                  </div>
                  <span className="text-gray-400">→</span>
                </Link>

              </div>

              {/* Logout Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-all"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
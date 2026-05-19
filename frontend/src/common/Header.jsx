import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation, useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Heart,
  ShoppingBag,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || null;
  
  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart?.items || state.cartStore?.cart || []);


  // Memoized values for performance
  const totalItems = useMemo(() => 
    cartItems.reduce((total, item) => total + (item.quantity || 1), 0),
    [cartItems]
  );

  const displayBadge = useMemo(() => 
    totalItems > 99 ? "99+" : totalItems.toString(),
    [totalItems]
  );

  // Navigation links configuration
  const navLinks = useMemo(() => {
    const links = [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: "Categories", path: "/categories" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" }
    ];
    
    // Add admin dashboard link if user is admin
    if (user?.role === "admin") {
      links.push({ name: "Admin", path: "/admin" });
    }
    
    return links;
  }, [user]);

  // Handle logout with proper cleanup
  const handleLogout = useCallback(async () => {
    try {
      // Clear all storage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      
      // Clear any other app data
      sessionStorage.clear();
      
      // Navigate to login
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsUserMenuOpen(false);
    }
  }, [navigate]);

  // Optimized scroll handler with requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  // Handle escape key for menus
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        if (isUserMenuOpen) setIsUserMenuOpen(false);
      }
    };
    
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen, isUserMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const toggleUserMenu = useCallback(() => {
    setIsUserMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-white border-b border-gray-100"
        }`}
        aria-label="Main header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-blue-600 text-white p-2 rounded-xl shadow-sm">
                <ShoppingBag size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={1.75} />
              </div>
              <Link 
                to="/" 
                className="text-2xl font-bold text-black hover:opacity-90 transition-opacity"
                aria-label="ShopEasy Home"
              >
                ShopEasy
               
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `
                    text-sm font-medium transition-colors duration-200
                    ${isActive 
                      ? "text-blue-600 border-b-2 border-blue-600" 
                      : "text-gray-700 hover:text-blue-600"
                    }
                    py-2
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              

              {/* Cart */}
              <Link 
                to="/cart" 
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100"
                aria-label={`Shopping cart with ${totalItems} items`}
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                    {displayBadge}
                  </span>
                )}
              </Link>

              {/* User Section */}
              <div className="relative">
                {user ? (
                  <>
                    <button
                      onClick={toggleUserMenu}
                      className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="User menu"
                      aria-expanded={isUserMenuOpen}
                    >
                      {user.avatar ? (
                        <img 
                          src={user.avatar} 
                          alt={user.fullName}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {user.fullName?.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="hidden md:inline-block text-sm font-medium text-gray-700">
                        {user.fullName?.split(" ")[0]}
                      </span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${isUserMenuOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* User Dropdown Menu */}
                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        <Link
                          to="/account"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          My Account
                        </Link>
                        <Link
                          to="/myorders"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          My Orders
                        </Link>
                       
                        <hr className="my-2" />
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                        >
                          Sign Out
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="hidden sm:flex items-center gap-3">
                    <Link
                      to="/login"
                      className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-3 py-2"
                      state={{ from: location.pathname }}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-200"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-40" : "opacity-0"
          }`}
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl transition-transform duration-300 transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="text-xl font-bold text-black">ShopEasy</span>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile User Info (if logged in) */}
            {user && (
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  {user.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.fullName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {user.fullName?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-gray-900">{user.fullName}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Navigation Links */}
            <nav className="flex-1 overflow-y-auto py-4" aria-label="Mobile navigation">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={toggleMobileMenu}
                    className={`block px-4 py-3 text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Auth Links */}
              {user ? (
                <div className="space-y-1 mt-4">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-3 text-base text-red-600 hover:bg-gray-50 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="space-y-2 px-4 mt-4">
                  <Link
                    to="/login"
                    onClick={toggleMobileMenu}
                    className="block w-full text-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={toggleMobileMenu}
                    className="block w-full text-center px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-md transition-all"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
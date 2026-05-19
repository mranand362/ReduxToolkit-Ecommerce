import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MainLayout from "./common/MainLayout";
import About from "./common/About";
import Contact from "./common/Contact";
import Product from "./common/Product";
import CheckOut from "./pages/CheckOut";
import Login from "./common/Login";
import Signup from "./common/Signup";
import ProductDetails from "./pages/ProductDetails";
import HelpCenter from "./common/HelpCenter";
import PrivacyPolicy from "./common/PrivacyPolicy";
import TermsConditions from "./common/TermsConditions";
import ShippingInfo from "./common/ShoppingInfo";
import Returns from "./common/Returns";
import Account from "./pages/Account";
import MyOrder from "./pages/MyOrder";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<MainLayout />} >

          <Route index element={<Home />} />

          <Route path="products" element={<Product />} />

          <Route path="product/:id" element={<ProductDetails />} />

          <Route path="cart" element={<Cart />} />

          <Route path="about" element={<About />} />

          <Route path="contact" element={<Contact />} />


          

          <Route path="login" element={<Login />} />
          <Route path="account" element={<Account />} />
          <Route path="myorders" element={<MyOrder />} />

          <Route path="signup" element={<Signup />} />
          <Route path="help" element={<HelpCenter />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsConditions />} />
          <Route path="returns" element={<Returns />} />
          <Route path="shipping" element={<ShippingInfo />} />

          <Route
  path="/checkout"
  element={
    <ProtectedRoute>
      <CheckOut />
    </ProtectedRoute>
  }
/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
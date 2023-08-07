import { FrappeProvider } from "frappe-react-sdk";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import './App.css'
import { useEffect } from "react";
import { ProductsProvider } from "./hooks/useProducts";
import { CartProvider } from "./hooks/useCart";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import { UserProvider } from "./hooks/useUser";
import { getToken } from "./utils/helper";
import BankInfoPage from "./pages/BankInfoPage";
import MyAccount from "./pages/MyAccount";
import ShippingAddress from "./pages/address/ShippingAddress";
import AddShippingAddress from "./pages/address/ShippingAddressAdd";
import EditShippingAddress from "./pages/address/ShippingAddressEdit";
import Welcome from "./pages/register/Welcome";
import Signup from "./pages/register/Signup";
import FillInfo from "./pages/register/FillInfo";
import Success from "./pages/register/Success";
import MyCoupon from "./pages/MyCoupon";
import MyID from "./pages/MyID";
import ProductCompare from "./pages/ProductCompare";

import BlogAdmin from "./pages/admin/BlogAdmin";
import BlogCategories from "./pages/admin/BlogCategories";
import BlogAdd from "./pages/admin/BlogAdd";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getToken()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <FrappeProvider url={"https://dev.zaviago.com"}
      enableSocket={false}
      tokenParams={{
        type: "token",
        useToken: true,
        token: getToken,
      }}
    >
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products/:id" element={<Product />} />
              <Route path="product-compare/:id" element={<ProductCompare />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/thankyou" element={<BankInfoPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/my-account" element={<MyAccount />}/>
              <Route path="/my-id" element={<MyID />}/>
              <Route path="/my-coupon" element={<MyCoupon />}/>
              <Route path="/welcome" element={<Welcome />}/>
              <Route path="/signup" element={<Signup />}/>
              <Route path="/fill-info" element={<FillInfo />}/>
              <Route path="/success" element={<Success />}/>
              <Route path="/shipping-address" element={<ShippingAddress />}/>
              <Route path="/shipping-address/add" element={<AddShippingAddress />}/>
              <Route path="/shipping-address/edit" element={<EditShippingAddress />}/>

              <Route path="/blog-admin" element={<BlogAdmin />}/>
              <Route path="/blog-categories" element={<BlogCategories />} />
              <Route path="/blog-add" element={<BlogAdd />} />
            </Routes>
            <Cart />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </FrappeProvider>
  )
}

export default App

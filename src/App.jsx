import { FrappeProvider } from "frappe-react-sdk";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import NavHeader from "./components/NavHeader";
import Home from "./pages/Home";
import Product from "./pages/Product";
import './App.css'
import { useEffect } from "react";
import { ProductsProvider } from "./hooks/useProducts";
import { CartProvider } from "./hooks/useCart";
import { getTokenFromLocalStorage } from "./utils";
import Cart from "./components/Cart";


function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getTokenFromLocalStorage()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <FrappeProvider url={"https://umer2002.aca.fc.zaviago.com"}
      enableSocket={false}
      tokenParams={{
        type: "token",
        useToken: true,
        token: getTokenFromLocalStorage,
      }}
    >
      <ProductsProvider>
        <CartProvider>
          <NavHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Cart />
        </CartProvider>
      </ProductsProvider>
    </FrappeProvider>
  )
}

export default App

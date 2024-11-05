import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Home/Navbar/navbar";
import Home from "./Components/Home/home";
import ProductList from "./Components/ProductList/productList";
import ProductDetails from "./Components/ProductDetails/productDetails";
import Checkout from "./Components/CheckoutPage/checkoutPage";
import PaymentSuccess from "./Components/Payment/payment";
import PaymentFailure from "./Components/Payment/failure";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./Components/Cart/cart";
import Orders from "./Components/Order/orders";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failure" element={<PaymentFailure />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GooglePayButton from "./GooglepayButtoon";

const CheckoutPage = () => {
  const { state } = useLocation();
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    phone: "",
  });
  const navigate = useNavigate();
  const product = state?.product || { price: 100 };
  const totalPrice = product.price;

  const handlePaymentSuccess = (paymentData) => {
    console.log("Payment successful", paymentData);
    navigate("/orders", {
      state: {
        orderId: "sample-order-id",
        products: product,
      },
    });
  };

  return (
    <div className="checkout">
      <h2>Checkout Page</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setPaymentInfo({ ...paymentInfo, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPaymentInfo({ ...paymentInfo, phone: e.target.value })}
          required
        />
      </form>
      <h3>Total Price: ₹{totalPrice}</h3>
      <GooglePayButton totalPrice={totalPrice.toString()} currencyCode="INR" />
    </div>
  );
};

export default CheckoutPage;

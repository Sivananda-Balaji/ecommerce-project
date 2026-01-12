import CheckoutHeader from "./CheckoutHeader";
import "./CheckoutPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

const CheckoutPage = ({ cart, loadCartItems }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    const fetchDeliveryptions = async () => {
      const response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(response.data);
    };

    const fetchPaymentSummary = async () => {
      const response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    fetchDeliveryptions();
    fetchPaymentSummary();
  }, [cart]);
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" href="images/icons/cart-favicon.png" />
      <CheckoutHeader cart={cart} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cart={cart}
            deliveryOptions={deliveryOptions}
            loadCartItems={loadCartItems}
          />
          <PaymentSummary
            paymentSummary={paymentSummary}
            loadCartItems={loadCartItems}
          />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;

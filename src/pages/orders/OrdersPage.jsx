import Header from "../../components/Header";
import "./OrdersPage.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { OrdersGrid } from "./ordersGrid";

const OrdersPage = ({ cart, loadCartItems }) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrders();
  }, []);
  return (
    <>
      <title>Orders</title>
      <link rel="icon" href="images/icons/orders-favicon.png" />
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} loadCartItems={loadCartItems} />
      </div>
    </>
  );
};

export default OrdersPage;

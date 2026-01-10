import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import dayjs from "dayjs";
import "./TrackingPage.css";

const TrackingPage = ({ cart }) => {
  const { orderId } = useParams();
  const [trackingOrders, setTrackingOrders] = useState(null);
  useEffect(() => {
    const fetchTrackingOrders = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`
      );
      setTrackingOrders(response.data);
    };
    fetchTrackingOrders();
  }, [orderId]);
  return (
    <>
      <title>Tracking</title>
      <link rel="icon" href="images/icons/tracking-favicon.png" />
      <Header cart={cart} />
      <div className="tracking-page">
        <Link className="back-to-orders-link link-primary" to="/orders">
          View all orders
        </Link>
        {trackingOrders &&
          trackingOrders.products.map((trackingorder) => {
            const orderTimeMS = trackingOrders.orderTimeMs;
            const estimatedDeliveryTimeMs =
              trackingorder.estimatedDeliveryTimeMs;
            const totalDeliveryTimeMs = estimatedDeliveryTimeMs - orderTimeMS;
            const timePassedMS = dayjs().valueOf() - orderTimeMS;
            const deliveryPercent = Math.min(
              (timePassedMS / totalDeliveryTimeMs) * 100,
              100
            );
            const isPreparing = deliveryPercent < 33;
            const isShipped = deliveryPercent >= 33 && deliveryPercent < 100;
            const isDelivered = deliveryPercent === 100;
            return (
              <div key={trackingorder.productId} className="order-tracking">
                <div className="delivery-date">
                  {deliveryPercent >= 100 ? "Delivered on " : "Arrving on "}
                  {dayjs(trackingorder.estimatedDeliveryTimeMs).format(
                    "dddd, MMMM D"
                  )}
                </div>

                <div className="product-info">{trackingorder.product.name}</div>

                <div className="product-info">
                  Quantity: {trackingorder.quantity}
                </div>

                <img
                  className="product-image"
                  src={trackingorder.product.image}
                />

                <div className="progress-labels-container">
                  <div
                    className={`progress-label ${
                      isPreparing && "current-status"
                    }`}
                  >
                    Preparing
                  </div>
                  <div
                    className={`progress-label ${
                      isShipped && "current-status"
                    }`}
                  >
                    Shipped
                  </div>
                  <div
                    className={`progress-label ${
                      isDelivered && "current-status"
                    }`}
                  >
                    Delivered
                  </div>
                </div>

                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${deliveryPercent}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TrackingPage;

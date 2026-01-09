import { Fragment } from "react";
import { Link } from "react-router";
import dayjs from "dayjs";

export const OrderDetailsGrid = ({ order }) => {
  return (
    <div className="order-details-grid">
      {order.products.map((productItem) => {
        return (
          <Fragment key={productItem.id}>
            <div className="product-image-container">
              <img src={productItem.product.image} />
            </div>

            <div className="product-details">
              <div className="product-name">{productItem.product.name}</div>
              <div className="product-delivery-date">
                Arriving on:{" "}
                {dayjs(productItem.estimatedDeliveryTimeMs).format("MMMM D")}
              </div>
              <div className="product-quantity">
                Quantity: {productItem.quantity}
              </div>
              <button className="buy-again-button button-primary">
                <img
                  className="buy-again-icon"
                  src="images/icons/buy-again.png"
                />
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <Link to="/tracking">
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </Link>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

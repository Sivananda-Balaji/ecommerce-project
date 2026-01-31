import { Fragment } from "react";
import { Link } from "react-router";
import dayjs from "dayjs";
import axios from "axios";

export const OrderDetailsGrid = ({ order, loadCartItems }) => {
  const handleAddSingleItem = async (productObj) => {
    await axios.post("/api/cart-items", productObj);
    await loadCartItems();
  };
  return (
    <div className="order-details-grid">
      {order.products.map((productItem) => {
        return (
          <Fragment key={productItem.productId}>
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
                <span
                  className="buy-again-message"
                  onClick={() =>
                    handleAddSingleItem({
                      productId: productItem.productId,
                      quantity: 1,
                    })
                  }
                >
                  Add to Cart
                </span>
              </button>
            </div>

            <div className="product-actions">
              <Link to={`/tracking/${order.id}/${productItem.productId}`}>
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

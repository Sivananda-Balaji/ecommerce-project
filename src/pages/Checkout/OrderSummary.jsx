import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemsDetails } from "./CartItemsDetails";
import { DeliveryDate } from "./DeliveryDate";

export const OrderSummary = ({ cart, deliveryOptions, loadCartItems }) => {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate
                cartItem={cartItem}
                deliveryOptions={deliveryOptions}
              />
              <div className="cart-item-details-grid">
                <CartItemsDetails
                  cartItem={cartItem}
                  loadCartItems={loadCartItems}
                />
                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  loadCartItems={loadCartItems}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

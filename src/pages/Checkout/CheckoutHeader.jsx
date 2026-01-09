import { Link } from "react-router";
import Logo from "../../assets/images/logo.png";
import MobileLogo from "../../assets/images/mobile-logo.png";
import "./CheckoutHeader.css";

const CheckoutHeader = ({ cart }) => {
  const totalQuantity = cart.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src={Logo} />
            <img className="mobile-logo" src={MobileLogo} />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link className="return-to-home-link" to="/">
            {totalQuantity} Items
          </Link>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeader;

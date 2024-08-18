import React from "react";
import "./styles.css";
import CheckoutProduct from "../CheckoutProduct";
import Subtotal from "../Subtotal";
import { useShopContext } from "../../context/StateProvider";

const Checkout = () => {
  const [{ cart }, dispatch] = useShopContext();
  return (
    <div className="checkout_container">
      <div className="checkout_left">
        <h2>Your Shopping Cart</h2>
        {cart.length ? cart.map((item, index) => <CheckoutProduct key={index} {...item} />) : null}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;

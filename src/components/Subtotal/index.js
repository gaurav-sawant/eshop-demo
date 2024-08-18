import React from "react";
import "./styles.css";
import CurrencyFormat from "react-currency-format";
import { useShopContext } from "../../context/StateProvider";
import { getTotalPrice } from "../../context/reducer";

const Subtotal = () => {
  const [{ cart }, dispatch] = useShopContext();
  return (
    <div className="subtotal_container">
      <CurrencyFormat
        renderText={(value) => (
          <span>
            Subtotal ({cart.length} items): <strong>{value}</strong>
          </span>
        )}
        thousandSeparator={true}
        prefix="$"
        value={getTotalPrice(cart)}
        decimalScale={2}
        displayType="text"
      />
      <small className="subtotal_gift">
        <input type="checkbox" name="is_gift" id="is_gift" /> This order contains a gift
      </small>
      <button className="checkout_btn">Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;

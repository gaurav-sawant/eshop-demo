import React from "react";
import "./styles.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarOutlined from "@mui/icons-material/StarOutlined";
import { useShopContext } from "../../context/StateProvider";

const CheckoutProduct = ({ id, title, rating, price, imgSrc }) => {
  const [{ cart }, dispatch] = useShopContext();
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  // Ensure the rating is within the range 0-5
  const validRating = Math.min(Math.max(rating, 0), 5);

  // Generate an array of 5 elements representing the stars
  const stars = Array.from({ length: 5 }, (_, index) => index < validRating);
  return (
    <div className="checkout_prd_container">
      <div className="checkout_prd_img_container">
        <div className="crop_img">
          <img className="checkout_prd_img" src={imgSrc} alt="product" />
        </div>
      </div>
      <div className="checkout_prd_details">
        <div className="checkout_prd_title">{title}</div>
        <div className="checkout_prd_price">{`$${parseFloat(price).toFixed(2)}`}</div>
        <div className="checkout_prd_rating">
          {stars.map((filled, index) => (filled ? <StarOutlined key={index} htmlColor="#ffc942" /> : <StarBorderIcon key={index} />))}
        </div>
        <div>
          <button className="remove_btn" onClick={removeItem}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;

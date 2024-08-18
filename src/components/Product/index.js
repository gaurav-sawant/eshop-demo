import React from "react";
import "./styles.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarOutlined from "@mui/icons-material/StarOutlined";
import { useShopContext } from "../../context/StateProvider";

const ProductCard = ({ title, rating, price, imgSrc }) => {
  const [state, dispatch] = useShopContext();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        title: title,
        rating: rating,
        price: price,
        imgSrc: imgSrc,
      },
    });
  };

  // Ensure the rating is within the range 0-5
  const validRating = Math.min(Math.max(rating, 0), 5);

  // Generate an array of 5 elements representing the stars
  const stars = Array.from({ length: 5 }, (_, index) => index < validRating);
  return (
    <div className="product_container">
      <div className="product_title">{title}</div>
      <div className="product_rating">
        {stars.map((filled, index) => (filled ? <StarOutlined key={index} htmlColor="#ffc942" /> : <StarBorderIcon key={index} />))}
      </div>
      <div className="product_price">{`$${parseFloat(price).toFixed(2)}`}</div>
      <div className="product_img_container">
        <div className="crop_img">
          <img className="product_img" src={imgSrc} alt="product" />
        </div>
      </div>
      <div className="add_to_cart_btn">
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

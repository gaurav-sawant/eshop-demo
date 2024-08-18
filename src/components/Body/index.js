import React from "react";
import "./styles.css";
import ProductCard from "../Product";
import { products } from "../../mock/ProductsData";

const BodyComponent = () => {
  return (
    <div className="body_container">
      <div className="banner_container">
        <img
          className="banner_img"
          src="https://th.bing.com/th/id/R.24c546dbee1456ac31aa55129b7e9f7b?rik=91L6GezRO2XN5Q&pid=ImgRaw&r=0"
          alt="banner"
        />
      </div>
      <div className="product_row">
        {products.map(({ title, rating, price, imgSrc }, index) => (
          <ProductCard key={index} title={title} rating={rating} price={price} imgSrc={imgSrc} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;

import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { useShopContext } from "../../context/StateProvider";

const Header = () => {
  const [{ cart }, dispatch] = useShopContext();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
          <StorefrontIcon fontSize="large" className="header_logoImg" />
          <h2 className="header_logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchOutlined className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav_item">
            <span className="nav_itemLineOne">Hello Guest</span>
            <span className="itemLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav_item">
            <ShoppingBasketIcon className="nav_itemLineOne" />
            <span className="itemLineTwo basketCount">{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { MdShoppingBasket } from "react-icons/md";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <BsSearch className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">Singn In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>

      <div className="header_optionBasket">
        <MdShoppingBasket />
        <span className="header_optionLineTwo header_basketCount">0</span>
      </div>
    </div>
  );
}

export default Header;

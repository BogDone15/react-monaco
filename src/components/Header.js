import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="container">
        <div className="header__wrapper">
          <img src={logo} alt="MONACO" />
          <div className="header__menu">
            <p className="header__menu-text">menu</p>
          </div>
          <ul>
            <Link to="/shop" className="header__item">
              SEARCH
            </Link>
            <Link to="/cart" className="header__item">
              CART (0)
            </Link>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.header`
  padding-top: 25px;
`;

import React, { Component } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import styled from "styled-components";
import Menu from "./Menu/MenuList";

export default class Header extends Component {
  state = {
    menuOpen: true,
  };

  handleToggle = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  };

  render() {
    return (
      <HeaderWrapper className="header">
        <div className="container">
          <div className="header__wrapper">
            <img src={logo} alt="MONACO" />
            <div className="header__menu" onClick={this.handleToggle}>
              {this.state.menuOpen ? (
                <p className="header__menu-text">menu</p>
              ) : (
                <Hamburger />
              )}
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
         <Menu />
        </div>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.header`
  padding-top: 25px;
`;

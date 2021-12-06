import React, { Component } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import styled from "styled-components";
import Menu from "./Menu/MenuList";
import { ProjectConsumer } from "../context";

export default class Header extends Component {
  const;
  render() {
    return (
      <HeaderWrapper className="header">
        <ProjectConsumer>
          {(value) => (
            <div className="container">
              <div className="header__wrapper">
                <Link to="/"> 
                <img src={logo} alt="MONACO" /></Link>
                <div className="header__menu" onClick={value.handleMenuClick}>
                  {value.menuOpen ? (
                    // <Hamburger />
                    <div className="hamburger">
                      <span className="first" />
                      <span className="second" />
                      <span className="third" />
                      <span className="fourth" />
                    </div>
                    
                  ) : (
                    <p className="header__menu-text">menu</p>
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
              {value.menuOpen ? <Menu /> : null}
            </div>
          )}
        </ProjectConsumer>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.header`
  padding-top: 25px;
`;

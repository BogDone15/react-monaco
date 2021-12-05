import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export default class Menu extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: this.props.open ? this.props.open : false,
  //   };
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.open !== this.state.open) {
  //     this.setState({ open: nextProps.open });
  //   }
  // }

  render() {
    return (
      <Nav>
        <ul>{this.props.children}</ul>
      </Nav>
    );
  }
}
const slideIn = keyframes`
0% {
  transform: translateX(-40px);
  opacity: 0;
}
100% {
  transform: translateX(0);
  opacity: 1;
}
`;

const Nav = styled.nav`
  position: absolute;
  left: 50%;
  top: 60px;
  z-index: 10;
  transform: translateX(-50%);
  width: 100%;
  background: #eae8e3;
  ul {
    width: 80%;
    margin: auto;
    padding-top: 145px;
    li {
      position: relative;
      cursor: pointer;
      svg {
        transition: all .2s linear;
        opacity: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
      &:first-child::before {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        background: #2e4f4d;
        height: 1px;
        width: 100%;
      }
      &::after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        background: #2e4f4d;
        height: 1px;
        width: 100%;
      }
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px;
        font-family: "Trajan Pro", sans-serif;
        font-weight: normal;
        font-size: 48px;
        line-height: 58px;
        text-transform: uppercase;
        color: #82979b;
        animation: .5s ${slideIn} ease-in-out;
        animation-delay: ${props => props.delay};
        transition: all .2s linear;
      }
      &:hover a {
        color: #2e4f4d;
      }
      &:hover svg {
        opacity: 1;
      }
    }
  }
`;

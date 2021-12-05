import React, { Component } from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default class MenuList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     menuOpen: false,
  //   };
  // }

  // handleMenuClick() {
  //   this.setState({ menuOpen: !this.state.menuOpen });
  // }

  // handleLinkClick() {
  //   this.setState({ menuOpen: false });
  // }

  render() {
    const menu = ["About us", "Shop", "Collections", "Contact us"];
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem key={index} delay={`${index * 0.3}s`}>
          {val}
        </MenuItem>
      );
    });

    return <Menu>{menuItems}</Menu>;
    
  }
}

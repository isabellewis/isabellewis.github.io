import React, { Component } from "react";
import { MenuItem } from "../../elements";

import { MenuList, MenuListWrapper, MenuToggleIcon } from "./Menu.style";

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };

    this.openMenuToggle = this.openMenuToggle.bind(this);
  }

  openMenuToggle() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    return (
      <MenuListWrapper>
        <MenuToggleIcon
          className="material-icons close"
          onClick={this.openMenuToggle}
        >
          {this.state.menuOpen ? "close" : ""}
        </MenuToggleIcon>
        <MenuList
          className={this.state.menuOpen ? "active" : "inactive"}
          onClick={this.openMenuToggle}
        >
          <MenuItem menuItemText="Home" menuItemLocation="/" />
          <MenuItem menuItemText="CV" menuItemLocation="/cv" />
        </MenuList>
        <MenuToggleIcon
          className="material-icons menu"
          onClick={this.openMenuToggle}
        >
          {this.state.menuOpen ? "" : "menu"}
        </MenuToggleIcon>
      </MenuListWrapper>
    );
  }
}

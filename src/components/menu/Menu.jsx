import React, { Component } from "react";
import { MenuItem } from "../../elements";

import { SocialMedia } from "../";

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

  handleClick() {
    window.scrollTo(0, 0);
    this.setState({
      menuOpen: false
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
        <MenuList className={this.state.menuOpen ? "active" : "inactive"}>
          <MenuItem
            onClick={this.handleClick.bind(this)}
            menuItemText="Home"
            menuItemLocation="/"
          />
          <MenuItem
            onClick={this.handleClick.bind(this)}
            menuItemText="CV"
            menuItemLocation="/cv"
          />
          <MenuItem
            onClick={this.handleClick.bind(this)}
            menuItemText="In the Media"
            menuItemLocation="/media"
          />
          <MenuItem
            onClick={this.handleClick.bind(this)}
            menuItemText="Recognitions"
            menuItemLocation="/recognitions"
          />
        </MenuList>
        <MenuToggleIcon
          className="material-icons menu"
          onClick={this.openMenuToggle}
        >
          {this.state.menuOpen ? "" : "menu"}
        </MenuToggleIcon>
        <SocialMedia theme="mainMenu" />
      </MenuListWrapper>
    );
  }
}

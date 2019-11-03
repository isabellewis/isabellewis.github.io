import React, { PureComponent } from "react";
import { MenuItemWrapper } from "./MenuItem.style";
import { NavLink } from "react-router-dom";

export class MenuItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { menuItemText, menuItemLocation } = this.props;

    return (
      <MenuItemWrapper className="menuItem">
        <NavLink className="menuItem-link" exact to={menuItemLocation}>
          {menuItemText}
        </NavLink>
      </MenuItemWrapper>
    );
  }
}

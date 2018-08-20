import React, { Component } from 'react';
import { MenuItem } from '../../elements';
import { SocialMedia } from '../';

import {
  MenuList,
  MenuListWrapper,
  MenuToggleIcon,
} from './Menu.style';

export class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false
		}

		this.openMenuToggle = this.openMenuToggle.bind(this);
	}

	openMenuToggle() {
		this.setState (
			{
				menuOpen: !this.state.menuOpen
			}
		);
	}

	render() {
		return (
			<MenuListWrapper>
				<MenuToggleIcon className="material-icons close" onClick={this.openMenuToggle}>{this.state.menuOpen ? 'close' : '' }</MenuToggleIcon>
				<MenuList className={this.state.menuOpen ? 'active' : 'inactive'} onClick={this.openMenuToggle}>
					<MenuItem menuItemText="home" menuItemLocation="heroPanel" />
					<MenuItem menuItemText="about" menuItemLocation="aboutPanel" />
					<MenuItem menuItemText="portfolio" menuItemLocation="portfolioPanel" />
					<MenuItem menuItemText="cv" menuItemLocation="cvPanel" />
				</MenuList>
				<MenuToggleIcon className="material-icons menu" onClick={this.openMenuToggle}>{this.state.menuOpen ? '' : 'menu' }</MenuToggleIcon>
				<SocialMedia theme='mainMenu' />
			</MenuListWrapper>
		);
	}
}

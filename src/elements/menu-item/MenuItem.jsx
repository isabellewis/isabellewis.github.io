import React, { PureComponent } from 'react';
import { MenuItemWrapper } from './MenuItem.style';

export class MenuItem extends PureComponent {
	constructor(props) {
		super(props);

		this.menuItemScroll = this.menuItemScroll.bind(this);
	}

	menuItemScroll() {
		const {
			menuItemLocation
		} = this.props;

		document.getElementById(menuItemLocation) &&
		document.getElementById(menuItemLocation).scrollIntoView({
			behavior: 'smooth'
		});
	};

	render() {
		const {
			menuItemText,
		} = this.props;
	
		return (
			<MenuItemWrapper class='menuItem' onClick={this.menuItemScroll}>
				<a>
					{ menuItemText }
				</a>
			</MenuItemWrapper>
		);
	}
}	

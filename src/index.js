import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { MenuPanel, HeroPanel, AboutPanel, Footer } from './views';

require('file-loader?name=[name].[ext]!../index.html');

const AppDiv = styled.div`
	min-height: 100%;

	* {
		box-sizing: border-box;
	}
`;

const MenuWrapper = styled.div`
	top: 0;
	position: sticky;

	&.mobile {
		display: block;

		@media (min-width: 576px) {
			display: none;
		}
	}

	&.desktop {
		display: none;

		@media (min-width: 576px) {
			display: block;
		}
	}
`;


const App = () => (
	<AppDiv className="app">
		<MenuWrapper className="mobile">
			<MenuPanel />
		</MenuWrapper>
		<HeroPanel />
		<MenuWrapper className="desktop">
			<MenuPanel />
		</MenuWrapper>
		<AboutPanel />
		<Footer />
	</AppDiv>
);

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

module.hot.accept();

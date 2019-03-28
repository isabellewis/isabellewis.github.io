import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { MenuPanel, HeroPanel, AboutPanel, Footer } from './views';

require('file-loader?name=[name].[ext]!../index.html');

const AppDiv = styled.div`
	min-height: 100%;
  min-width: 250px;

	* {
		box-sizing: border-box;
	}
`;

const MenuWrapper = styled.div`
  display: top;
	top: 0;
	position: sticky;
`;


const App = () => (
	<AppDiv className="app">
		<MenuWrapper>
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

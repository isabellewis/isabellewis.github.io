import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { MenuPanel, HeroPanel, AboutPanel, PortfolioPanel, CVPanel, Footer } from './views';
import { ThemeProvider } from '../node_modules/glamorous';

require('file-loader?name=[name].[ext]!../index.html');

const AppDiv = styled.div`
	height: 100%;

	* {
		box-sizing: border-box;
	}
`;

const MainPanel = styled.div`
	height: 100%;
	padding: 50px 50px 0;
	width: 100%;
`;

const App = () => (
	<AppDiv className="app">
		<MenuPanel />
		<MainPanel>
			<HeroPanel />
			<PortfolioPanel />
			<AboutPanel />
			<CVPanel />
			<Footer />
		</MainPanel>
	</AppDiv>
);

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

module.hot.accept();

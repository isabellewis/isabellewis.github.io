import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Heading } from './elements/heading/Heading';

const App = ({
	foo,
}) => (
	<div className="app">
		<Heading title="Isabel Lewis" />
	</div>
);

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

module.hot.accept();

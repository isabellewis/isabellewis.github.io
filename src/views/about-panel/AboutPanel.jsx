import React from 'react';
import styled from 'styled-components';

import { ShortCopy } from '../../elements';

const AboutWrapper = styled.div`
	height: 100%;
	padding: 30px 0;
`;

const ImageWrapper = styled.div`
	max-height: 90%;
	overflow: hidden;
	text-align: center;


	@media only screen and (min-width: 576px) {
		max-height: 50%;
	}
`;

const TextWrapper = styled.div`
	padding: 30px;

	@media only screen and (min-width: 576px) {
		padding: 50px;
	}
`;

const Image = styled.img`
	max-height: 100%;
	max-width: 90%;


	@media only screen and (min-width: 576px) {
		max-height: 100%;
		max-width: 50%;
	}
`;

export const AboutPanel = () => (
	<AboutWrapper id="aboutPanel">
		<ImageWrapper>
			<Image src={require('../../assets/images/profpic.jpg')} />
		</ImageWrapper>
		<TextWrapper>
			<ShortCopy
				shortCopyText="Hello. I'm a web developer from London."
			/>
		</TextWrapper>
	</AboutWrapper>
);
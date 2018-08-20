import React from 'react';
import styled from 'styled-components';

import { ShortCopy } from '../../elements';

const AboutWrapper = styled.div`
	display: block;
	min-height: 100%;
	padding: 100px 10px;
	vertical-align: top;
	width: 100%;

	@media only screen and (min-width: 576px) {
		padding: 200px 8px;
	}
`;

const TextWrapper = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	padding: 30px;

	@media only screen and (min-width: 576px) {
		padding: 50px 150px;
	}
`;

const ImageImg = styled.img`
	animation: blob 20s ease-in-out infinite;
	display: block;
	margin: 0 auto;
  max-height: 50%;
  max-width: 50%;

  @media only screen and (min-width: 576px) {
    max-height: 500px;
		max-width: 50%;
	}
	
	@keyframes blob {
		0% {
			border-radius: 290% 150% 193% 250%;
		}
		10% {
			border-radius: 99% 178% 249% 179%;
		}
		20% {
			border-radius: 190% 160% 199% 100%;
		}
		30% {
			border-radius: 262% 178% 149% 130%;
		}
		40% {
			border-radius: 122% 178% 249% 159%;
		}
		50% {
			border-radius: 130% 238% 100% 250%;
		}
		60% {
			border-radius: 120% 348% 329% 100%;
		}
		70% {
			border-radius: 210% 158% 150% 200%;
		}
		80% {
			border-radius: 360% 218% 99% 250%;
		}
		90% {
			border-radius: 192% 178% 249% 159%;
		}
		100% {
			border-radius: 290% 150% 193% 250%;
		}
	}
`;

export const AboutPanel = () => (
	<AboutWrapper id="aboutPanel">
			<ImageImg src={require('../../assets/images/img3.jpg')} />
		<TextWrapper>
			<ShortCopy
				shortCopyText="Hello. I'm a web developer from London. When I'm not ticking off JIRA tickets I enjoy playing guitar and travelling. Have a look at the side projects I've added to my page."
			/>
		</TextWrapper>
	</AboutWrapper>
);
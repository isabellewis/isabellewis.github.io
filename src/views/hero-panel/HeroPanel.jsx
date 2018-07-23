import React from 'react';
import styled from 'styled-components';
import { Heading } from '../../elements';

const HeroWrapper = styled.div`
	animation: 2s fadeIn 1;
	height: 100%;
	margin: 0;
	padding: 100px 10px;
	text-align: right;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		30% {
			opacity: 0;
		}
		100% {
			opactity: 1;
		}
	}

	@media only screen and (min-width: 576px) {
		padding: 200px 8px;
	}

	@media only screen and (min-width: 992px) {
		padding: 300px 60px;
	}
`;

export const HeroPanel = () => (
	<HeroWrapper id="heroPanel">
		<Heading title="Isabel Lewis" />
	</HeroWrapper>
);

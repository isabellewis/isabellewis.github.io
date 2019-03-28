import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { TypingText } from '../../components';

import hello from '../../assets/images/img2.jpg';

const HeroWrapper = styled.div`
	animation: 2s fadeIn 1;
  background-image: ${hello};
	display: block;
	min-height: 100%;
  height: 3000px;
	margin: 0;
	overflow: hidden;
	padding: 100px 30px;
	text-align: right;
	width: 100%;

	@keyframes fadeIn {
		0%, 30% {
			opacity: 0;
		}
		100% {
			opactity: 1;
		}
	}

	@media only screen and (min-width: 576px) {
		padding: 200px 50px;
	}

	@media only screen and (min-width: 992px) {
		padding: 300px 200px;
	}
`;

const headingText = ['Full-Stack', 'React', 'Redux', 'MobX', 'Styled-Components', 'Webpack', 'Babel', 'Loopback', 'NodeJS', 'Continuous-Integration', 'Agile', 'SCRUM', 'KanBan'];

export class HeroPanel extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<HeroWrapper id="heroPanel">
				<TypingText textValues={headingText} />
			</HeroWrapper>
		);
	}
}
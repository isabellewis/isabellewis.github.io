import React, { PureComponent } from 'react';
import styled from 'styled-components';

const HeadingOne = styled.h1`
	cursor: default;
	font-family: "Courier New", Courier, monospace;
	font-size: 50px;
	font-weight: 200;
	margin: 0 0 0 auto;

	@media only screen and (min-width: 576px) {
		border-right: 10px solid transparent;
		font-size: 60px;
		overflow: hidden;
		white-space: nowrap;
	}

	@media only screen and (min-width: 768px) {
		font-size: 90px;
	}

	@media only screen and (min-width: 992px) {
		font-size: 110px;
	}
`;

const HeadingWrapper = styled.div`
	@media only screen and (min-width: 576px) {
		display: inline-block;

		&:hover {
			display: block;
			.heading-text {
				animation:
					typing 3.5s steps(25, end),
					blink-caret .75s step-end infinite;
			}
		}
	}

	@keyframes typing {
		0% { max-width: 0 }
		100% { max-width: 100% }
	}

	@keyframes blink-caret {
		from, to { border-color: transparent }
		50% { border-color: #000; }
	}
`;

export class Heading extends PureComponent {
	render () {
		const {
			title,
		} = this.props;
	
		return (
			<HeadingWrapper>
				<HeadingOne className='heading-text'>
					{ title }
				</HeadingOne>
			</HeadingWrapper>
		);
	}
}
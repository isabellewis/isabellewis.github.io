import React from 'react';
import styled from 'styled-components';

const SocialMediaWrapper = styled.div`
	margin: auto;
	padding: 10px;
	text-align: center;
	width: 100%;

	&.mainMenuLogoWrapper {
		display: none;
		margin: 0;

		@media only screen and (min-width: 768px) {
			display: inline-block;
			float: right;
			margin: 0;
			padding: 0;
			width: auto;
		}
	}
`;

const Logo = styled.i`
	color: #000;
	font-size: 20px;
	transition: color 1s;

	:hover {
		color: #5fccdc;
	}

	&.footerLogo {
		color: #bbb;

		:hover {
			color: #000;
		}
	}
`;

const LogoA = styled.a`
	display: inline-block;
	margin: 0 7px;
	padding: 0 7px;

	:first-child {
		margin: 0 7px 0 0;
	}

	:last-child {
		margin: 0 0 0 7px;
	}

	@media only screen and (min-width: 576px) {
		margin: 0 15px;
		padding: 0 15px;

		:first-child {
			margin: 0 15px 0 0;
		}
	
		:last-child {
			margin: 0 0 0 15px;
		}
	}
`;

export const SocialMedia = ({
	theme
}) => (
	<SocialMediaWrapper className={`${theme}LogoWrapper`}>
		<LogoA href='https://github.com/isabellewis' target="_blank" className={`${theme}LogoA`}>
			<Logo className={`fa fa-github-alt ${theme}Logo`} />
		</LogoA>
		<LogoA href='https://www.linkedin.com/in/isabel-lewis-693779139/' target="_blank" className={`${theme}LogoA`}>
			<Logo className={`fa fa-linkedin ${theme}Logo`} />
		</LogoA>
		<LogoA href='https://twitter.com/irlewis' target="_blank" className={`${theme}LogoA`}>
			<Logo className={`fa fa-twitter ${theme}Logo`} />
		</LogoA>
		<LogoA href='https://www.instagram.com/isabel_lewis/' target="_blank" className={`${theme}LogoA`}>
			<Logo className={`fa fa-instagram ${theme}Logo`} />
		</LogoA>
	</SocialMediaWrapper>
);
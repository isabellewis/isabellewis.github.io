import React from 'react';
import {
  SocialMediaWrapper,
  Logo,
  LogoA
} from './SocialMedia.style';

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
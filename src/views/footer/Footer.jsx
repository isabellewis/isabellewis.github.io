import React from 'react';
import styled from 'styled-components';

import { SocialMedia } from '../../components';
import { ShortCopy } from '../../elements';

const FooterPanel = styled.div`
	background: #fff;
	padding: 10px;
	width: 100%;
`;

const CopyStyling = styled.div`
	color: #bbb;
	text-align: center;
`;

export const Footer = () => (
	<FooterPanel>
		<CopyStyling>
			<ShortCopy shortCopyText='Fancy a chat?' theme='light' />
		</CopyStyling>
		<SocialMedia theme='footer' />
	</FooterPanel>
);
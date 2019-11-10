import React from "react";
import styled from "styled-components";

import { SocialMedia } from "../../components";
import { ShortCopy } from "../../elements";

const FooterPanel = styled.div`
  background: #fff;
  bottom: 0;
  left: 0;
  padding: 10px;
  position: fixed;
  width: 100%;
`;

const CopyStyling = styled.div`
  color: #bbb;
  text-align: center;
`;

export const Footer = () => (
  <FooterPanel>
    <CopyStyling>
      <ShortCopy theme="light">Fancy a chat?</ShortCopy>
    </CopyStyling>
    <SocialMedia theme="footer" />
  </FooterPanel>
);

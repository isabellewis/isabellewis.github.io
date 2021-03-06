import React from "react";
import ReactGA from "react-ga";

import styled from "styled-components";
import { Menu } from "../../components";
import { Logo } from "../../elements";

const MenuWrapper = styled.nav`
  background: #fff;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;
  width: 100%;

  @media (min-width: 576px) {
    justify-content: left;
    opacity: 0.95;
  }

  @media (min-width: 995px) {
    justify-content: left;
    opacity: 0.95;
    max-width: 2000px;
    width: 100%;
  }

  .logo-wrapper {
    text-decoration: none;

    @media only screen and (min-width: 576px) {
      text-align: center;
      width: 100%;
    }

    @media only screen and (min-width: 995px) {
      text-align: left;
      width: auto;
    }
  }
`;

export const MenuPanel = () => (
  <MenuWrapper>
    <ReactGA.OutboundLink
      eventLabel="Logo"
      to="/"
      target="_self"
      className="logo-wrapper"
    >
      <Logo label="ISABEL LEWIS" />
    </ReactGA.OutboundLink>
    <Menu />
  </MenuWrapper>
);

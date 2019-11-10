import React from "react";
import ReactGA from "react-ga";
import { SocialMediaWrapper, Logo, LogoA } from "./SocialMedia.style";

const trackingHandler = action => {
  ReactGA.event({
    category: "User",
    action: `${action}`
  });
};

export const SocialMedia = ({ theme }) => (
  <SocialMediaWrapper className={`${theme}LogoWrapper`}>
    <LogoA
      onClick={() => trackingHandler("github")}
      href="https://github.com/isabellewis"
      target="_blank"
      className={`${theme}LogoA`}
    >
      <Logo className={`fa fa-github-alt ${theme}Logo`} />
    </LogoA>
    <LogoA
      onClick={() => trackingHandler("linkedin")}
      href="https://www.linkedin.com/in/isabel-lewis-693779139/"
      target="_blank"
      className={`${theme}LogoA`}
    >
      <Logo className={`fa fa-linkedin ${theme}Logo`} />
    </LogoA>
    <LogoA
      onClick={() => trackingHandler("twitter")}
      href="https://twitter.com/irlewis"
      target="_blank"
      className={`${theme}LogoA`}
    >
      <Logo className={`fa fa-twitter ${theme}Logo`} />
    </LogoA>
    <LogoA
      onClick={() => trackingHandler("instagram")}
      href="https://www.instagram.com/isabel_lewis/"
      target="_blank"
      className={`${theme}LogoA`}
    >
      <Logo className={`fa fa-instagram ${theme}Logo`} />
    </LogoA>
  </SocialMediaWrapper>
);

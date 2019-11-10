import React from "react";

import { ShortCopy } from "../../elements";
import { HomeWrapper, TextWrapper, ImageImg } from "./HomePanel.style";

export const HomePanel = () => (
  <HomeWrapper id="HomePanel">
    <ImageImg src={require("../../assets/images/img3.jpg")} />
    <TextWrapper>
      <ShortCopy>
        Hello. I'm a web developer based in London. When I'm not ticking off
        JIRA tickets I enjoy playing guitar and travelling. I'll be adding my
        portfolio to this page so stay tuned.
      </ShortCopy>
    </TextWrapper>
  </HomeWrapper>
);

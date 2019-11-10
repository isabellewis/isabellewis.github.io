import React from "react";
import img9 from "../../assets/images/img9.jpg";
import img8 from "../../assets/images/img8.jpg";

import { SectionHeading } from "../../elements";
import { RecognitionPanelWrapper } from "./RecognitionPanel.style";

export const RecognitionPanel = () => {
  return (
    <RecognitionPanelWrapper>
      <ul className="cardList">
        <li className="card">
          <img className="recognitionPanel__img" src={img9}></img>
          <div className="recognitionPanel__copy-container">
            <a
              href="https://awards.womenofthefuture.co.uk/our-alumni-category/2019/"
              target="_blank"
              className="recognitionPanel__copy-container-link"
            >
              <SectionHeading
                className="recognitionPanel__h2"
                title="Shortlisted for Women of the Future Digital and Technology 2019"
              ></SectionHeading>
            </a>
          </div>
        </li>
        <li className="card">
          <img className="recognitionPanel__img" src={img8}></img>
          <div className="recognitionPanel__copy-container">
            <a
              href="https://www.computerweekly.com/news/252462987/Winners-of-Makers-Women-in-Software-Powerlist-announced"
              target="_blank"
              className="recognitionPanel__copy-container-link"
            >
              <SectionHeading
                className="recognitionPanel__h2"
                title="Women in Software Powerlist 2019, Computer Weekly and Makers"
              ></SectionHeading>
            </a>
          </div>
        </li>
      </ul>
    </RecognitionPanelWrapper>
  );
};

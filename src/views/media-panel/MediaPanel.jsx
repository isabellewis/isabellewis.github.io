import React from "react";
import img from "../../assets/images/img1.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img10 from "../../assets/images/img10.png";
import img11 from "../../assets/images/img11.png";

import { ShortCopy, SectionHeading } from "../../elements";
import { MediaPanelWrapper } from "./MediaPanel.style";

export const MediaPanel = () => {
  return (
    <MediaPanelWrapper>
      <ul className="cardList light-panel">
        <li className="card">
          <div className="mediaPanel__copy-container">
            <SectionHeading
              className="mediaPanel__h2"
              title="CodeBar Monthlies, The Importance of Semantic HTML"
            ></SectionHeading>
            <ShortCopy className="mediaPanel__p">
              With accessibility becoming increasingly important to consider in
              development it's easy to start with the basic building blocks of
              the page. This talk will go into detail about how we can achieve
              accessible markup by looking at semantic HTML and give practical
              ways to introduce this into the code we write every day. We will
              also look at some tools we can use to test the accessibility of a
              webpage.
            </ShortCopy>
          </div>

          <img className="mediaPanel__img" src={img}></img>
        </li>
        <li className="card">
          <div className="mediaPanel__copy-container">
            <SectionHeading
              className="mediaPanel__h2"
              title="Publicis VivaWomen!, Ready for Anything"
            ></SectionHeading>
            <ShortCopy className="mediaPanel__p">
              It was great to be asked to talk on VivaWomen's Ready For Anything
              panel. The event opened up conversations for women at different
              stages of their career and reflected on the challenges faced along
              with how to break barriers down.
            </ShortCopy>
          </div>

          <img className="mediaPanel__img" src={img6}></img>
        </li>
        <li className="card">
          <div className="mediaPanel__copy-container">
            <SectionHeading
              className="mediaPanel__h2"
              title="React London BYOP, A Summary of React London"
            ></SectionHeading>
            <ShortCopy className="mediaPanel__p">
              After attending the React London conference in 2017 I gave a
              summary at the React London BYOP the next day to present the key
              learnings I had gained from React London the day before. This
              included talking about Snapshot testing and building websites
              offline first.
            </ShortCopy>
          </div>
          <img className="mediaPanel__img" src={img5}></img>
        </li>
      </ul>

      <ul className="cardList dark-panel">
        <li className="card">
          <a
            className="card-link"
            href="https://www.wearefutureheads.com/news-and-views/ffs-isabel-lewis/"
            target="_blank"
          >
            <div className="mediaPanel__copy-container">
              <SectionHeading
                className="mediaPanel__h2"
                title="FFS Isabel Lewis"
              ></SectionHeading>
              <ShortCopy className="mediaPanel__p">
                In this interview I talk about the journey of my career so far
                and talk about challenges to diversity in the tech industry.
                Futureheads are a digital recruiter in the UK and Germany who
                helped Publicis Sapient recruit with a balanced shortlist of
                diversity hires.
              </ShortCopy>
            </div>

            <img className="mediaPanel__img" src={img10}></img>
          </a>
        </li>

        <li className="card">
          <a
            className="card-link"
            href="https://www.campaignlive.co.uk/article/vivawomen-agency-initiative-making-difference/1498313"
            target="_blank"
          >
            <div className="mediaPanel__copy-container">
              <SectionHeading
                className="mediaPanel__h2"
                title="CampaignLive – VivaWomen! How an agency initiative is making a difference"
              ></SectionHeading>
              <ShortCopy className="mediaPanel__p">
                As a member of VivaWomen! at Publicis Sapient I was asked to
                share my experience and thoughts on the womens network.
              </ShortCopy>
            </div>
            <img className="mediaPanel__img" src={img11}></img>
          </a>
        </li>
      </ul>
    </MediaPanelWrapper>
  );
};

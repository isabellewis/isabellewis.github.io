import React from "react";
import styled from "styled-components";

import img4 from "../../assets/images/img4.jpg";
import img12 from "../../assets/images/img12.jpg";

import { SectionHeading, ShortCopy } from "../../elements";

const CVWrapper = styled.div`
  min-height: 100%;
  padding: 50px 0;

  .CVSectionWrapper {
    border: 6px solid black;
    margin: 20px 0;
    padding: 20px;

    @media only screen and (min-width: 576px) {
      margin: 100px 200px;
      padding: 50px;
    }

    @media only screen and (min-width: 995px) {
      padding: 100px;
    }
  }

  .CVSectionImgWrapper {
    width: 100%;

    .CVSectionImg {
      display: block;
      margin: 0 auto;
      max-height: 470px;
    }
  }
`;

const HeadingThree = styled.h3`
  font-family: "Archivo Narrow", sans-serif;
  font-size: 18px;
  font-weight: 200;
  margin: 0;
`;

export const CVPanel = () => (
  <CVWrapper id="cvPanel">
    <div className="CVSectionWrapper">
      <SectionHeading title="Experience" />
      <HeadingThree>
        January 2017 - Present | Associate Technology at Publicis Sapient
      </HeadingThree>
      <ul>
        <li>
          <ShortCopy>
            Delivering end to end JavaScript solutions for Digital
            Transformation using full stack JS.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Most recent role as Lead Front End developer for the Authentication
            team at Lloyds Banking Group delivering Open Banking. This involved
            building a reusable UI library using React, MobX, Styled Components
            and Storybook and presenting solutions at client meetings. We also
            used Jenkins and followed a bi-weekly release cycle for production
            deployment.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Experience with retail clients using React and TDD to develop
            complex solutions with high performance following a Continuous
            Integration model to be shipped internationally.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Working closely with designers and BA’s to develop an accessible,
            maintainable UI component library which can be used across brands
            and working as part of a SCRUM team.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Mentored new employees and graduates in JavaScript and onboarding
            for projects.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Contributed to Publicis’ culture by initiating and running the
            Women’s Developer Group, attending internal and external developer
            meetups and help run JavaScript training sessions.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            React, Redux, MobX, Loopback (Node.js framework), Neo4J, Jest,
            Jasmine, Karma, Sass, Styled Components, Storybook, AEM, API Gateway
            for IBM Connect, Kanban and SCRUM.
          </ShortCopy>
        </li>
      </ul>

      <HeadingThree>
        July 2016 - December 2016 | Graduate Associate Technology at Publicis
        Sapient
      </HeadingThree>
      <ul>
        <li>
          <ShortCopy>
            Three months studying Interactive Development for Digital
            Transformation in Sapient’s Bangalore office.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Experienced working on an international team from different
            technological backgrounds to deliver a high-quality solution under
            pressure.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Working with experts in the industry to develop solutions in React
            for FS domain clients.
          </ShortCopy>
        </li>
      </ul>
    </div>

    <div className="CVSectionImgWrapper">
      <img className="CVSectionImg" src={img4} />
    </div>

    <div className="CVSectionWrapper">
      <SectionHeading title="Education" />
      <HeadingThree>
        2013 - 2016 | First Class BSc Honours, Computer Science, Newcastle
        University
      </HeadingThree>
      <ShortCopy>
        Using Java as a primary language covering: programming fundamentals and
        design patterns, testing and industry standards, algorithms,
        architecture, databases, operating systems, networks, distributed
        systems, web front end and back end, bio computing for machine learning,
        HCI, Reliability and Fault Tolerance.
      </ShortCopy>
      <HeadingThree>
        2011-2013 | King Edward VI College, Stourbridge, A levels University
      </HeadingThree>
      <ShortCopy>Mathematics B, ICT B, Psychology C</ShortCopy>
      <HeadingThree>
        2006-2011 | Ounsdale High School, Wombourne, GCSE’s
      </HeadingThree>
      <ShortCopy>
        11 GCSE’s A*-B including Maths A, English A and Science A*
      </ShortCopy>
    </div>

    <div className="CVSectionImgWrapper">
      <img className="CVSectionImg" src={img12} />
    </div>

    <div className=" CVSectionWrapper">
      <SectionHeading title="Achievements or positions of responsibility" />
      <ul>
        <li>
          <ShortCopy>
            Co-chair for VivaWomen, Publicis Sapient's Women Group.
          </ShortCopy>
        </li>

        <li>
          <ShortCopy>
            Initiated the Women Developer Group at Publicis Sapient.
          </ShortCopy>
        </li>

        <li>
          <ShortCopy>
            Ran a CodeFirst:Girls course at Publicis Sapient, teaching women
            from various non-technical backgrounds HTML, CSS and JavaScript.
          </ShortCopy>
        </li>
      </ul>
    </div>
  </CVWrapper>
);

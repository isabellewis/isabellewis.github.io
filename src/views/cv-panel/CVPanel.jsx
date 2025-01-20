import React from "react";
import styled from "styled-components";

import img4 from "../../assets/images/img4.jpg";
import img12 from "../../assets/images/img12.jpg";

import { SectionHeading, ShortCopy } from "../../elements";

const CVWrapper = styled.div`
  min-height: 100%;
  padding: 0;
  text-align: left;

  .CVSectionWrapper {
    border: 6px solid black;
    margin: 20px 0;
    padding: 20px;

    @media only screen and (min-width: 576px) {
      margin: 100px 20px;
      padding: 50px;
    }

    @media only screen and (min-width: 995px) {
      padding: 100px;
    }
  }

  .CVSectionImg {
    display: flex;
    flex-direction: column;
    height: 400px;
    justify-content: center;
    max-width: 700px;
    margin: 0 auto;
    object-fit: cover;
    overflow: hidden;
    width: 100%;
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
        Senior Front End Developer, Nutmeg JPMorganChase (April 2022 - Present)
      </HeadingThree>
      <ul>
        <li>
          <ShortCopy>
            Working with cross-stack technologies including: React, TypeScript, Node, XState. Testing with Jest, RTL and Cypress. Styling with CSS Modules and design tokens. CMS with Prismic.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Led projects end to end from inital concept to deployment in production.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Using a Micro Frontend architecture working in cross-functional teams.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Data driven development including the design, implementation and analysis of AB tests using Unleash and working closely with product managers for Amplitude analytics.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Conducted technical spikes to clarify ambiguous requirements and identify dependencies, presenting results to stakeholders.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Collaborated as part of an internal team maintaining Nutmegs component library, to ensure consistency, scalability and accessibility across the wider platform.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Contributed to improvements to the CI/CD pipeline efficiency.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Strong focus on risk and controls.
          </ShortCopy>
        </li>
      </ul>
      <HeadingThree>
        Front End Developer, Everpress (November 2020 - March 2022)
      </HeadingThree>
      <ul>
        <li>
          <ShortCopy>
            Working with technologies including: React with hooks, Redux, Redux Saga. Testing with Cypress. Styling with Tailwind and CSS Modules.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Data driven development with A/B testing using Google Optimize and analytics tracking with Amplitude.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Owned a project to rebuild the search, assessed different libraries and approaches eventually integrating with Algolia and took the average request time from 1.24s to 14.84ms.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Worked on large features including the checkout journey, new cart, shop, follow an artist, favourite a design.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Recognition for running an Accessibility Hackathon which improved the accessibility experience for customer and creator journeys.
          </ShortCopy>
        </li>
      </ul>
      <HeadingThree>
        Senior Associate Technology, Publicis Sapient (September 2019 - November 2020)
      </HeadingThree>
      <ul>
        <li>
          <ShortCopy>
            Cloud transformation project for a large UK retail bank.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Working with technologies including: React with hooks, TypeScript, Redux, Redux Thunk and GraphQL. Testing with Jest and React Test Renderer. Styling with Material UI and Styled Components.

          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Following a Monorepo architecture with React Micro Frontends.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Recognised by the project with a "Learning Mindset" award.
          </ShortCopy>
        </li>
      </ul>
      <HeadingThree>
        January 2017 - September 2019 | Associate Technology at Publicis Sapient
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
            Experience as a Lead Front End developer and sole manager of a
            component library using a module approach used by other teams. This
            involved building a reusable UI library using React, MobX, Styled
            Components and Storybook and presenting solutions at client
            meetings. We also used Jenkins and followed a bi-weekly release
            cycle for production deployment.
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

    <img className="CVSectionImg" src={img4} />

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
    </div>

    <img className="CVSectionImg" src={img12} />

    <div className=" CVSectionWrapper">
      <SectionHeading title="Achievements or positions of responsibility" />
      <ul>
        <li>
          <ShortCopy>
            Runner up at Junction Connected Hackathon 2020 for cafe intelligence.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Influential Women in Tech Longlist | Computer Weekly 2021, 2020 & 2019.
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Women In Software Powerlist 2019 | Makers & Computer Weekly
          </ShortCopy>
        </li>
        <li>
          <ShortCopy>
            Women of the Future | Technology & Digital Shortlist 2019
          </ShortCopy>
        </li>

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

import React from 'react';

import { PortfolioItem } from '../../elements';
import { PortfolioScrollWrapper } from './PortfolioScroll.style';

export const PortfolioScroll = () => (
  <PortfolioScrollWrapper>
    <PortfolioItem portfolioItemText="React" portfolioItemLink="https://www.google.com" index={0} />
    <PortfolioItem portfolioItemText="React Project" portfolioItemLink="https://www.google.com" index={1} />
    <PortfolioItem portfolioItemText="React Project Name" portfolioItemLink="https://www.google.com" index={2} />
    <PortfolioItem portfolioItemText="React Project Name Goes" portfolioItemLink="https://www.google.com" index={3} />
    <PortfolioItem portfolioItemText="React Project Name Goes Here" portfolioItemLink="https://www.google.com" index={4} />
    <PortfolioItem portfolioItemText="React Project Name Goes Here" portfolioItemLink="https://www.google.com" index={5} />
    <PortfolioItem portfolioItemText="React Project Name Goes Here" portfolioItemLink="https://www.google.com" index={6} />
    <PortfolioItem portfolioItemText="React Project Name Goes Here" portfolioItemLink="https://www.google.com" index={7} />
    <PortfolioItem portfolioItemText="React Project Name Goes Here" portfolioItemLink="https://www.google.com" index={8} />
    <PortfolioItem portfolioItemText="React Project Name Goes Here" portfolioItemLink="https://www.google.com" index={9} />
    <PortfolioItem portfolioItemText="React Project Name Goes Here" portfolioItemLink="https://www.google.com" index={10} />
    <PortfolioItem portfolioItemText="React Project Name Goes Here" portfolioItemLink="https://www.google.com" index={11} />
  </PortfolioScrollWrapper>
);

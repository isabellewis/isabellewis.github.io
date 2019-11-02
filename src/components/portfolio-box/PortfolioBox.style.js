import styled from 'styled-components';

const PortfolioBoxWrapper = styled.div`
  @media only screen and (min-width: 576px) {
    display: block;
    height: 50%;
    padding: 60px 0;
    text-align: center;
    width: 100%;
  }
`;

const PortfolioBoxContent = styled.div`
  background: white;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  min-height: 300px;
  overflow: hidden;
  padding: 15px;
  width: 50%;
`;

const ArrowIcon = styled.i`
  color: #ffaeae;
  cursor: pointer;
  display: inline-block;
  font-size: 100px;
  user-select: none;

  @media only screen and (min-width: 768px) {
    font-size: 150px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 200px;
  }

  &:hover {
    color: #ff8383;
  }
`;

const PortfolioBoxTitle = styled.h2`
  color: #000;
  font-family: 'Barlow',sans-serif;
  font-size: 45px;
  opacity: 1;
`;

const UpperPanel = styled.div`
  height: 100%;
`;

const LowerPanel = styled.div`
  display: none;
  padding: 50px 0;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

const ButtonPanel = styled.div`
  margin: 25px 0 0;
  min-height: 48px;
  padding: 20px 0;
`;

export {
  PortfolioBoxWrapper,
  PortfolioBoxContent,
  ArrowIcon,
  PortfolioBoxTitle,
  UpperPanel,
  LowerPanel,
  ButtonPanel
};
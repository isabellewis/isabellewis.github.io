import styled from 'styled-components';

const LogoText = styled.a`
  color: black;
  display: inline-block;
  font-family: 'Raleway', serif;
  font-weight: 600;
  letter-spacing: 5px;
  margin: 3px auto auto 0;
  text-align: center;
  text-decoration: none;
  user-select: none;

  @media only screen and (min-width: 576px) {
    margin: 0 30px 0 0;
  }
`;

export {
  LogoText
};
import styled from "styled-components";

const AppDiv = styled.div`
  min-width: 250px;
  padding: 0 20px;

  @media only screen and (min-width: 576px) {
    padding: 0 70px;
  }

  * {
    box-sizing: border-box;
  }
`;

const MenuWrapper = styled.div`
  top: 0;
  position: sticky;
`;

const Main = styled.main`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 0 135px;
  text-align: center;

  @media only screen and (min-width: 576px) {
    padding: 10px 0 100px;
  }

  @media only screen and (min-width: 995px) {
    padding: 10px 0 135px;
  }
`;

export { AppDiv, MenuWrapper, Main };

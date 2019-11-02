import styled from "styled-components";

const AppDiv = styled.div`
  min-height: 100vh;
  min-width: 250px;
  padding: 20px 20px;

  @media only screen and (min-width: 576px) {
    padding: 0 70px;
  }

  * {
    box-sizing: border-box;
  }
`;

const MenuWrapper = styled.div`
  display: top;
  top: 0;
  position: sticky;
`;

export { AppDiv, MenuWrapper };

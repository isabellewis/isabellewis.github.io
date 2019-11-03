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

export { AppDiv, MenuWrapper };

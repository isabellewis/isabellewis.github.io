import styled from "styled-components";

const MenuItemWrapper = styled.li`
  display: block;
  padding: 50px 30px 0;
  max-width: 575px;
  width: 100vw;

  &:last-child {
    padding: 50px 40px;
  }

  @media only screen and (min-width: 576px) {
    display: inline-block;
    padding: 0 30px 0 0;
    width: auto;

    &:last-child {
      padding: 0 30px 0 0;
    }
  }

  .menuItem-link {
    color: #001;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.5s;
    vertical-align: sub;

    &:hover {
      color: #1e8bad;
    }
  }
`;

export { MenuItemWrapper };

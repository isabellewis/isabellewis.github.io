import styled from "styled-components";

const MenuItemWrapper = styled.li`
  color: #001;
  cursor: pointer;
  display: block;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 500;
  list-style-type: none;
  padding: 20px 10px 0;
  transition: color 0.5s;
  vertical-align: super;

  &:hover {
    color: #1e8bad;
  }

  @media only screen and (min-width: 576px) {
    display: inline-block;
    padding: 0 20px 0 0;
  }
`;

export { MenuItemWrapper };

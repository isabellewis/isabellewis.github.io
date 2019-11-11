import styled from "styled-components";

const MenuList = styled.ul`
  border: solid black;
  border-width: 0 1px 2px;
  display: inline-block;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  vertical-align: middle;
  white-space: nowrap;

  &.active {
    background: #fff;
    display: block;
    overflow: hidden;

    @media (min-width: 576px) {
      display: inline-block;
    }
  }

  &.inactive {
    display: none;

    @media (min-width: 576px) {
      display: inline-block;
    }
  }

  @media (min-width: 576px) {
    border: none;
    display: block;
    position: relative;
    width: 100%;
  }

  @media (min-width: 995px) {
    display: inline-block;
    width: auto;
  }
`;

const MenuListWrapper = styled.div`
  display: block;
  margin: 0 0 auto auto;
  text-align: right;

  @media (min-width: 576px) {
    display: block;
    margin: 15px 0 15px;
    text-align: center;
    width: 100%;
  }

  @media (min-width: 995px) {
    display: inline-block;
    margin: 0 0 0 auto;
    width: auto;
  }
`;

const MenuToggleIcon = styled.i`
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;

  @media (min-width: 576px) {
    display: none;
  }
`;

export { MenuList, MenuListWrapper, MenuToggleIcon };

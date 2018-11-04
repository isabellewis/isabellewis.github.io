import styled from 'styled-components';

const MenuList = styled.ul`
	display: inline-block;
	margin: 0 0 0 auto;
	padding: 0;
	vertical-align: middle;
  white-space: nowrap;

	&.active {
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
`;

const MenuListWrapper = styled.div`
	text-align: right;

	@media (min-width: 576px) {
		text-align: left;
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

export {
  MenuList,
  MenuListWrapper,
  MenuToggleIcon,
};
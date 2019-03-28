import styled from 'styled-components';

const MenuItemWrapper = styled.li`
	color: #001;
	cursor: pointer;
	display: block;
	font-family: 'Raleway', sans-serif;
	font-size: 15px;
  font-weight: 500;
	list-style-type: none;
	padding: 20px 10px;
	transition: color .5s;

	&:hover {
		color: #1e8bad;
	}

	@media only screen and (min-width: 576px) {
		display: inline-block;
		padding: 0 28px;

		:last-child{
      padding: 0 0 0 28px;
    }
	}

  @media only screen and (min-width: 768px) {
		:last-child{
      padding: 0 28px;
    }
  }
`;

export {
  MenuItemWrapper
};
import styled from 'styled-components';

export const Container = styled.button`
	display: flex;
	width: 50px;
	height: 50px;
	background-color: #7159c1;
	border: none;
	border-radius: 4px;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	transition: 0.5s border;
	&:hover {
		border: 2px solid #9878ff;
	}
`;

export const Content = styled.input`
	display: flex;
	align-self: center;
	width: 60%;
	height: 30px;
	margin: 20px;
`;

import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	flex-direction: column;

	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, 1fr);

	background: rgba(0, 0, 0, 0.3);

	min-width: 350px;

	min-height: 160px;

	padding: 20px;
	border-radius: 5px;
	color: #fff;

	& + div {
		margin-top: 20px;
	}

	p {
		align-self: center;
		justify-self: center;
		font-weight: bold;
		font-size: 22px;
	}

	div {
		display: grid;

		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		align-self: end;
		span {
			align-self: center;
			justify-self: start;
			font-weight: bold;
			font-size: 13px;

			opacity: 0.45;
		}
	}
`;

export const Delete = styled.button`
	display: flex;
	justify-self: end;
	width: 35px;
	height: 35px;
	background-color: tomato;
	border: none;
	border-radius: 4px;
	align-items: center;
	justify-content: center;
`;

import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { History } from 'history';
import { FaCheck } from 'react-icons/fa';
import { Container, Button, Content, Input } from './styles';

type Props = {
	history: History;
};

export const CREATE_OR_LOGIN_USER = gql`
	mutation($email: String!) {
		createOrLoginUser(data: { email: $email }) {
			id
			content
		}
	}
`;

const Home: React.FC<Props> = ({ history }) => {
	const [ input, setInput ] = useState<string>('');
	const [ email, setEmail ] = useState<string>('');

	const [ createOrLoginUser, { data } ] = useMutation(CREATE_OR_LOGIN_USER);

	useEffect(
		() => {
			if (data) {
				const { createOrLoginUser } = data;
				const { id } = createOrLoginUser;

				saveUserToLocalStorage(email, id);

				history.push(`/dashboard?id=${id}`);
			}
		},
		[ data, history, email ]
	);

	async function saveUserToLocalStorage(email: string, id: number) {
		localStorage.setItem(
			'user',
			JSON.stringify({
				email,
				id
			})
		);
	}

	async function handleRegister(e: React.MouseEvent) {
		e.preventDefault();

		if (input.length < 1) {
			alert('Insert a valid e-mail!');
			return;
		}

		createOrLoginUser({ variables: { email: input } });
		setEmail(input);
		setInput('');
	}

	return (
		<Container>
			<Content>
				<form>
					<Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="E-mail" />

					<Button onClick={handleRegister}>
						<FaCheck size={36} color="#fff" />
						<span>Login or Register</span>
					</Button>
				</form>
			</Content>
		</Container>
	);
};

export default Home;

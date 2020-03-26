import React from 'react';

import { Container, Delete } from './styles';

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { MdDelete } from 'react-icons/md';

export interface IMessage {
	id: number;
	content: string;
	user: {
		email: string;
	};
}

interface User {
	email: string;
	id: number;
}

type Props = {
	item: IMessage;
};

export const DELETE_MESSAGE = gql`
	mutation($id: Float!, $userId: Float!) {
		deleteMessage(data: { userId: $userId, id: $id }) {
			id
		}
	}
`;

const Message: React.FC<Props> = ({ item }) => {
	const [ deleteMessage ] = useMutation(DELETE_MESSAGE);

	async function handleCreateMessage() {
		const user: User = JSON.parse(localStorage.getItem('user') || '');

		const { id } = user;

		try {
			deleteMessage({ variables: { id: item.id, userId: id } });
			window.location.reload(false);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<Container key={item.id}>
			<p>{item.content}</p>

			<div>
				<span>{item.user.email}</span>
				<Delete>
					<MdDelete color="#fff" onClick={() => handleCreateMessage()} size={20} />
				</Delete>
			</div>
		</Container>
	);
};

export default Message;

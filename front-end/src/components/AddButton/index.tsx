import React, { useState } from 'react';

import { Container, Content as ContentInput } from './styles';

import { MdAdd } from 'react-icons/md';

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Modali, { useModali } from 'modali';

export const CREATE_MESSAGE = gql`
	mutation($content: String!, $userId: Float!) {
		createMessage(data: { userId: $userId, content: $content }) {
			id
		}
	}
`;

interface User {
	email: string;
	id: number;
}

const AddButton: React.FC = () => {
	const [ content, setContent ] = useState<string>('');
	const [ create ] = useMutation(CREATE_MESSAGE);

	const [ modal, toggleModal ] = useModali({
		animated: true,
		title: 'Create a new message',
		buttons: [
			<Modali.Button label="Cancel" isStyleCancel onClick={() => toggleModal()} />,
			<Modali.Button label="Create" isStyleDefault onClick={() => handleCreateMessage()} />
		]
	});

	async function handleCreateMessage() {
		const user: User = JSON.parse(localStorage.getItem('user') || '');

		const { id } = user;

		try {
			await create({ variables: { content, userId: id } });
			toggleModal();
			window.location.reload(false);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<Container>
			<MdAdd color="#fff" onClick={toggleModal} size={30} />
			<Modali.Modal {...modal}>
				<ContentInput
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="Type the content here..."
					onKeyPress={(e) => (e.key === 'Enter' ? handleCreateMessage() : null)}
					type="text"
				/>
			</Modali.Modal>
		</Container>
	);
};

export default AddButton;

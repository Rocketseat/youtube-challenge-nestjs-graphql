import React from 'react';

import { Container } from './styles';

import { MdAdd } from 'react-icons/md';

export default function AddButton() {
	return (
		<Container>
			<MdAdd color="#fff" size={30} />
		</Container>
	);
}

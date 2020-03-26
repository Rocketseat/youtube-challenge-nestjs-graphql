import React from 'react';

import { Container, Delete } from './styles';

import { MdDelete } from 'react-icons/md';

export interface IMessage {
	id: number;
	content: string;
	user: {
		email: string;
	};
}

interface Props {
	item: IMessage;
}

export default function Message({ item }: Props) {
	return (
		<Container key={item.id}>
			<p>{item.content}</p>

			<div>
				<span>{item.user.email}</span>
				<Delete>
					<MdDelete color="#fff" size={20} />
				</Delete>
			</div>
		</Container>
	);
}

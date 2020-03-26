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

type Props = {
	item: IMessage;
};

const Message: React.FC<Props> = ({ item }) => {
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
};

export default Message;

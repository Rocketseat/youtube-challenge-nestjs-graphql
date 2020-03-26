import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Container } from './styles';

import Message, { IMessage } from '../../components/Message';
import AddButton from '../../components/AddButton';


const GET_ALL_MESSAGES = gql`
  query {
    getMessages {
      id
      content
      user {
        email
      }
    }
  }
`;

const Board: React.FC = () => {
  const { loading, data } = useQuery<{ getMessages: IMessage[] }>(
    GET_ALL_MESSAGES
  );

  if (loading) return <p>Loading ...</p>;

  return (
    <Container>
      {data?.getMessages.map((item: IMessage) => (
        <Message key={item.id} item={item} />
      ))}
      <AddButton />

    </Container>
  );
}

export default Board;
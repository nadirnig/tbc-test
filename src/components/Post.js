import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
const Post = (props) => {
  return (
    <Container>
      {props.respons.map((res) => (
        <ListGroup key={res.id}>
          <ListGroup.Item style={{ marginTop: 15 }}>{res.title}</ListGroup.Item>
        </ListGroup>
      ))}
    </Container>
  );
};
export default Post;

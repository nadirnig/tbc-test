import React from 'react';
import { Container } from 'react-bootstrap';
const Profile = () => {
  const user = localStorage.getItem('login');
  return (
    <Container>
      <div>
        <h1>Профиль</h1>
        <h2>Привет , {user}</h2>
      </div>
    </Container>
  );
};
export default Profile;

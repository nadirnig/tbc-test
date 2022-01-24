import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  let history = useNavigate();
  const [flag, setFlag] = useState(false);

  const check = () => {
    let aLogin = localStorage.getItem('login');
    let aPass = localStorage.getItem('pass');

    if (aLogin === 'admin' && aPass === '12345') {
      return setFlag(true);
    }
  };

  const setData = () => {
    localStorage.setItem('login', login);
    console.log('item setted');
    localStorage.setItem('pass', pass);
    check();
    localStorage.setItem('flag', flag);
    if (flag == true) {
      history('/profile');
    } else {
      return alert('НЕВЕРНЫЙ ПАРОЛЬ ИЛИ ЛОГИН');
    }
  };

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Login</label>
        <input
          type="text"
          style={{ maxWidth: '160px' }}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        ></input>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Password</label>
        <input
          type="password"
          style={{ maxWidth: '160px' }}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        ></input>
      </div>
      <Button style={{ marginTop: '10px' }} onClick={() => setData()}>
        Confirm
      </Button>
    </Container>
  );
};
export default Login;

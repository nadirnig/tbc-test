import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  let history = useNavigate();
  const clear = () => {
    localStorage.clear();
    history('/login');
  };
  const flag = localStorage.getItem('flag');
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>TBC TEST</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  Главная
                </Link>
              </Nav.Link>
              {flag && (
                <Nav.Link>
                  <Link to="/profile" style={{ textDecoration: 'none' }}>
                    Профиль
                  </Link>
                </Nav.Link>
              )}

              <Nav.Link>
                <Link to="/news" style={{ textDecoration: 'none' }}>
                  Новости
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Item style={{ marginRight: 5 }}>
              <Button variant="success">
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Вход
                </Link>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button
                variant="danger"
                style={{ textDecoration: 'none' }}
                onClick={() => clear()}
              >
                Выход
              </Button>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;

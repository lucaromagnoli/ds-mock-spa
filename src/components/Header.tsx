import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <Container>
          <h1 className="fw-bold">DataService Mock SPA</h1>
        </Container>
      </header>
      <div className="custom-navbar">
        <Container className="d-flex justify-content-center align-items-center">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/infinite-scroll">Infinite Scroll</Nav.Link>
            <Nav.Link as={Link} to="/load-more">Load More</Nav.Link>
          </Nav>
        </Container>
      </div>
    </>
  );
};

export default Header;
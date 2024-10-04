import React from 'react';
import { Container } from 'react-bootstrap';

const RootPage: React.FC = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center">
      <h1>Welcome to DataService Mock SPA</h1>
      <p>This is the main landing page of the application.</p>
    </Container>
  );
};

export default RootPage;
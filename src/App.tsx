import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import InfiniteScrollPage from './pages/InfiniteScrollPage';
import LoadMorePage from './pages/LoadMorePage';
import RootPage from './pages/RootPage'; // Import RootPage component
import Header from './components/Header';
import './App.css'; // Import custom CSS

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Container className="main-content d-flex flex-column justify-content-center align-items-center text-center">
          <Routes>
            <Route path="/" element={<RootPage />} />
            <Route path="/infinite-scroll" element={<InfiniteScrollPage />} />
            <Route path="/load-more" element={<LoadMorePage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
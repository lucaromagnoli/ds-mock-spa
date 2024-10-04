import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InfiniteScrollPage from './pages/InfiniteScrollPage';
// import LoadMorePage from './pages/LoadMorePage';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Infinite Scroll</Link> | <Link to="/load-more">Load More</Link>
      </nav>
      <Routes>
        <Route path="/" element={<InfiniteScrollPage />} />
        {/* <Route path="/load-more" element={<LoadMorePage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

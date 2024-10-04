import React from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import getPosts from "../hooks/getPosts";
import Posts from "../components/Posts";

const LoadMorePage: React.FC = () => {
  const { posts, loading, hasMore, setPage } = getPosts();

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="mb-4">Load More</h1>
      <Posts posts={posts} lastPostElementRef={() => {}} />
      {loading && <Spinner animation="border" />}
      {!loading && hasMore && (
        <Button variant="primary" onClick={handleLoadMore}>Load More</Button>
      )}
      {!hasMore && <p>No more posts</p>}
    </Container>
  );
};

export default LoadMorePage;

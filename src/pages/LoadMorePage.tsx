import React from "react";
import getPosts from "../hooks/getPosts";
import Posts from "../components/Posts";

const LoadMorePage: React.FC = () => {
  const { posts, loading, hasMore, setPage } = getPosts();

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Load More</h1>
      <Posts posts={posts} lastPostElementRef={() => {}} />
      {loading && <p>Loading...</p>}
      {!loading && hasMore && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
      {!hasMore && <p>No more posts</p>}
    </div>
  );
};

export default LoadMorePage;
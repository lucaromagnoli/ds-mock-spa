import React, { useCallback, useEffect, useState } from "react";
import { fetchPosts } from "../services";
import Posts, { Post } from "../components/Posts";

const LoadMorePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMorePosts = useCallback(async () => {
    setLoading(true);
    const newPosts: Post[] = await fetchPosts(page, 10);
    if (newPosts.length === 0) {
      setHasMore(false); // Set hasMore to false if no more posts are returned
    } else {
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    loadMorePosts();
  }, [loadMorePosts]);

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
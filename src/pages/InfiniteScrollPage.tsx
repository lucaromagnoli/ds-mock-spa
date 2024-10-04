import React, { useCallback, useEffect, useRef, useState } from "react";
import { fetchPosts } from "../services";
import Posts, { Post } from '../components/Posts'

const InfiniteScrollPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observer = useRef<IntersectionObserver | null>(null);

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
    if (hasMore) {
      loadMorePosts();
    }
  }, [loadMorePosts, hasMore]);

  const lastPostElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading || !hasMore) return; // Stop observing if loading or no more posts
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1); // Trigger loading of new posts by changing page number
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div>
      <h1>Infinite Scrolling</h1>
      <Posts posts={posts} lastPostElementRef={lastPostElementRef} />
      {loading && <p>Loading...</p>}
      {/* Message indicating no more posts */}
    </div>
  );
};

export default InfiniteScrollPage;
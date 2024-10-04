import React, { useCallback, useRef } from "react";
import getPosts from "../hooks/getPosts";
import Posts from "../components/Posts";

const InfiniteScrollPage: React.FC = () => {
  const { posts, loading, hasMore, setPage } = getPosts();
  const observer = useRef<IntersectionObserver | null>(null);

  const lastPostElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading || !hasMore) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
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
    </div>
  );
};

export default InfiniteScrollPage;
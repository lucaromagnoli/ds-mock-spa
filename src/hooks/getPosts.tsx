import { useCallback, useEffect, useState } from "react";
import { Post } from "../components/Posts";

const fetchPosts = async (page: number, limit: number) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
          return await response.json();
    }
   catch (error) {
    console.error('Error fetching posts:', error);
  }
};

const getPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMorePosts = useCallback(async () => {
    setLoading(true);
    const newPosts: Post[] = await fetchPosts(page, 10);
    if (newPosts.length === 0) {
      setHasMore(false);
    } else {
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    loadMorePosts();
  }, [loadMorePosts]);

  return { posts, loading, hasMore, setPage };
};

export default getPosts;
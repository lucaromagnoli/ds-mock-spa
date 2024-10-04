import React from "react";

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  posts: Post[];
  lastPostElementRef: (node: HTMLLIElement | null) => void;
}

const Posts: React.FC<PostsProps> = ({ posts, lastPostElementRef }) => {
  return (
    <ul>
      {posts.map((post, index) => (
        <li
          key={post.id}
          ref={posts.length === index + 1 ? lastPostElementRef : null}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
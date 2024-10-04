import React from "react";
const Posts = ({ posts, lastPostElementRef }) => {
  return (
    <ul>
      {posts.map((post, index) => (
        <li
          key={post.id} // Use post.id directly
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

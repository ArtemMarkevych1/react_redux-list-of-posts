import React from 'react';
import './Post.css';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import { PostPropTypes } from '../../proptype/proptype';

const Post = ({ post, deletePost }) => {
  const { user, comments } = post;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <User name={user.name} email={user.email} address={user.address} />
      <CommentList comments={comments} />
      <button
        type="button"
        onClick={deletePost}
      >
        x
      </button>
    </div>
  );
};

Post.propTypes = PostPropTypes;

export default Post;
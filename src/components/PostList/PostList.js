import React from 'react';
import { Post } from '../Post';
import { PostListPropTypes } from '../../proptype/proptype';

const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = PostListPropTypes;

export default PostList;
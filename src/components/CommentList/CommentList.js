import React from 'react';
import { Comment } from '../Comment';
import './CommentList.css';
import { CommentListPropTypes } from '../../proptype/proptype';

const CommentList = ({ comments }) => (
  <div>
    <h3>Comments:</h3>
    {comments.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = CommentListPropTypes;

export default CommentList;
import React from 'react';
import './Comment.css';
import User from '../User/User';
import { CommentPropTypes } from '../../proptype/proptype';

const Comment = ({ comment, deleteComment }) => {
  const { name, email, body } = comment;

  return (
    <div>
      <User name={name} email={email} />
      <p>
        {body}
      </p>
      <button
        type="button"
        onClick={deleteComment}
      >
        x
      </button>
    </div>
  );
};

Comment.propTypes = CommentPropTypes;

export default Comment;
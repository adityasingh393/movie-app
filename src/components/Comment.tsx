import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addComment } from '../redux/slices/authSlice';

interface CommentProps {
  movieId: string;
}

const Comment: React.FC<CommentProps> = ({ movieId }) => {
  const [comment, setComment] = useState('');
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handlePostComment = () => {
    if (comment.trim() && user) {
      dispatch(addComment({ movieId, comment }));
      setComment('');
    }
  };

  return (
    <div className="comment-section">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        className="comment-input"
        disabled={!user}
      />
      <button onClick={handlePostComment} className="comment-button" disabled={!user}>
        Post Comment
      </button>
    </div>
  );
};

export default Comment;

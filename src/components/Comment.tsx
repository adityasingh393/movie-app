import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addComment } from '../redux/slices/authSlice';
import { Commenttype } from '../utils/types';
interface CommentProps {
  movieId: string;
}

const Comment: React.FC<CommentProps> = ({ movieId }) => {
  const [comment, setComment] = useState('');
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleCommentSubmit = () => {
    if (user) {
      dispatch(addComment({ movieId, comment }));
      setComment('');
    }
  };

  return (
    <div className="comment-container">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
        className="comment-input"
      />
      <button onClick={handleCommentSubmit} className="comment-button">Submit</button>
      {user && user.comments[movieId]?.map((c:Commenttype, index:number) => (
        <div key={index} className="comment-text">
          {c.text}
        </div>
      ))}
    </div>
  );
};

export default Comment;

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { db } from '../firebase';
import './styles/CommentSection.css';

const CommentSection = ({ pageId }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [submittedComments, setSubmittedComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsRef = db.collection('comments').where('pageId', '==', pageId);
        const snapshot = await commentsRef.get();
        const commentsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [pageId]);

  const handleCreateComment = async () => {
    try {
      if (newComment.trim() === '') {
        return;
      }

      // Perform additional checks to ensure the comment is appropriate and doesn't contain malicious content or links

      const commentRef = await db.collection('comments').add({
        pageId,
        content: newComment,
        userId: isLoggedIn ? 'userId' : null,
      });

      const newCommentData = { id: commentRef.id, content: newComment };
      setSubmittedComments((prevComments) => [...prevComments, newCommentData]);

      setNewComment('');
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  const handleCancelComment = () => {
    setNewComment('');
  };

  return (
    <div className="comment-section">
      {isLoggedIn && (
        <div className="comment-input-container">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="comment-input"
          ></textarea>
          <div className="comment-buttons">
            <button onClick={handleCancelComment}>Cancel</button>
            <button onClick={handleCreateComment}>Comment</button>
          </div>
        </div>
      )}

      <div className="comment-list">
        {submittedComments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <p className="comment-content">{comment.content}</p>
            {/* Add comment actions here if needed */}
          </div>
        ))}
      </div>

      {comments.map((comment) => (
        <div key={comment.id} className="comment-item">
          <p className="comment-content">{comment.content}</p>
          {/* Add comment actions here if needed */}
        </div>
      ))}
    </div>
  );
};

export default CommentSection;

import React from 'react';
import '../styles/csci99.css';
import CommentSection from '../CommentSection'; // Update the import path

const csci99 = () => {
  return (
    <div>
      <CommentSection pageId="csci99" /> {/* Render the CommentSection */}
    </div>
  );
};

export default csci99;

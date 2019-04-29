import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.scss';


function Comment(props) {
    //console.log(props);
    return (
        <div className="comment">
        <h6 className="comment-username">{props.comment.username}</h6>
        <p className="comment-text">{props.comment.text}</p>
        </div>
    );
}


Comment.propTypes = {
    comment: PropTypes.object
 };

export default Comment;
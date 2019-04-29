import React from 'react';
import PropTypes from 'prop-types';


function Comment(props) {
    console.log(props);
    return (
        <div className="comment">
        <h3 className="comment-username">{props.comment.username}</h3>
        <p className="comment-text">{props.comment.text}</p>
        </div>
    );
}

export default Comment;
import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';


function CommentSection(props) {
    console.log(props);
    return (
        <div className = "comment-section">
            {props.comments.map(comment => <Comment comment = {comment} key ={comment.id}/>)}
        <form>
            <input className="newcomment" type="text" placeholder="Leave a comment"/>
        </form>
        </div>
    );
}

export default CommentSection;
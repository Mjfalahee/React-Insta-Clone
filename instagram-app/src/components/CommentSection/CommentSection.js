import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.scss';


function CommentSection(props) {
    //console.log(props);
    return (
        <div className = "comment-section">
            {props.comments.map(comment => <Comment comment = {comment} key ={comment.id}/>)}
        <form className="commentform">
            <input className="newcomment" 
            type="text" 
            placeholder="Add a comment..."/>
        </form>
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
 };

export default CommentSection;
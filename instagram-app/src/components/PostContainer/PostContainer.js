import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    console.log(props);
    return( 
        <div className="post-container">
        <CommentSection comments= {props.data.comments} />
        </div>
    );
}

PostContainer.propTypes = {
    posts: PropTypes.object
 };

export default PostContainer;



import React from 'react';
import PropTypes from 'prop-types';
import PostContent from '../PostContent/PostContent';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.scss';

function PostContainer(props) {
    //console.log(props);
    return( 
        <div className="post-container">
        <PostContent username={props.data.username} 
        thumbnail={props.data.thumbnailUrl} 
        image={props.data.imageUrl}
        likes={props.data.likes}
        />
        <CommentSection comments= {props.data.comments} postid= {props.data.imageUrl}/>
        </div>
    );
}

PostContainer.propTypes = {
    data: PropTypes.object
 };



export default PostContainer;



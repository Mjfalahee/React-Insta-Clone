import React from 'react';
import PropTypes from 'prop-types';
import './PostContent.scss';


function PostContent(props) {
    //console.log(props);
    return (
        <div>
        <header className="posthead">
        <img className="postthumbnail" src= {props.thumbnail} alt=""/>
        <h5 className="postname"> {props.username} </h5>
        </header>
        <img className="postimage" src= {props.image} alt=""/>
        <div className="icons">
        <img src="" alt="heart" />
        <img src="" alt="quote" />
        </div>
        <p className="likes"> {props.likes} likes </p>
        </div>
    )
}

export default PostContent;
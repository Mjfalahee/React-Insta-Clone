import React from 'react';
import './PostContent.scss';


function Likes(props) {
    console.log(props);
    return (
        <div className="icons">
            <button onClick={props.handleClick}>
            <img className="heart" 
                src="https://img.icons8.com/windows/32/000000/like.png" 
                alt="heart"/> 
            </button>
            <img className="quote" 
                src="https://img.icons8.com/metro/26/000000/topic.png" 
                alt="quote" />
            <p className="likes"> {props.likes} likes </p>
        </div>
    );
}

export default Likes;
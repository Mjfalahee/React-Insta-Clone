import React from 'react';
import Likes from './Likes';
import PropTypes from 'prop-types';
import './PostContent.scss';

class PostContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content : props,
            likesonState: props.likes,
        }
    }

    LikesHandler = () => {
        console.log('clicked');
        let newlikes = this.state.likesonState;
        newlikes++;
        this.setState({likesonState: newlikes});
    } 

    render() {
        //console.log(props);
        return (
            <div>
            <header className="posthead">
            <img className="postthumbnail" src= {this.state.content.thumbnail} alt=""/>
            <h5 className="postname"> {this.state.content.username} </h5>
            </header>
            <img className="postimage" src= {this.state.content.image} alt=""/>
            <Likes likes={this.state.likesonState} handleClick={this.LikesHandler}/>
            </div>
        )
    }
}
export default PostContent;
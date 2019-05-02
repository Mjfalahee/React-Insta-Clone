import React from 'react';
import Likes from './Likes';
//import './PostContent.scss';
import styled, { css } from 'styled-components';
import H5 from '../StyledReusable';


const Header = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
`

const Img = styled.img`
    ${props => (props.type === 'thumbnail' ? `
        width: 5%;
        height: 5%;
        border-radius: 20px;` : null)}
    ${props => (props.type === 'postimage' ? `
        width: 100%;` : null)}
`

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
            <Header className="posthead">
            <Img type="thumbnail" src= {this.state.content.thumbnail} alt=""/>
            <H5> {this.state.content.username} </H5>
            </Header>
            <Img type="postimage" src= {this.state.content.image} alt=""/>
            <Likes likes={this.state.likesonState} handleClick={this.LikesHandler}/>
            </div>
        )
    }
}
export default PostContent;
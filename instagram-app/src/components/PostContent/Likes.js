import React from 'react';
import styled, { css } from 'styled-components';
//import './PostContent.scss';

const Div = styled.div`
    padding-top: 0;
    margin-top: 0;
    height: 100%;
    ${props => (props.type === 'likescontainer' ? `
    width: 30px;
    height: 30px;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    ` : null)}
    ${props => (props.type === 'quotecontainer' ? `
    width: 30px;
    height: 30px;
    display: inline-block;
    margin-right: 10px;` : null)}
`
const Img = styled.img`
    ${props => (props.type === 'heart' ? `  
        width: 100%;
        height: 100%;` : null)}
    ${props => (props.type === 'quote' ? `
        width: 90%;
        height: 90%;
        padding-right: 10px;` : null)}
`
const P = styled.p`
    margin-top: 10px;
    margin-bottom: 0;
    padding-left: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    font-size: 14px;
`

function Likes(props) {
    console.log(props);
    return (
        <Div>
            {/* <button onClick={props.handleClick}> */}
            <Div type="likescontainer" onClick={props.handleClick}>
            <Img type="heart" 
                src="https://img.icons8.com/windows/32/000000/like.png" 
                alt="heart"/> 
            </Div>
            <Div type="quotecontainer">
            <Img type="quote" 
                src="https://img.icons8.com/metro/26/000000/topic.png" 
                alt="quote" />
            </Div>
            <P> {props.likes} likes </P>
        </Div>
    );
}

export default Likes;
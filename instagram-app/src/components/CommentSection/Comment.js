import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import H5 from '../StyledReusable';
//import './CommentSection.scss';


const Div = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 30px;
    padding-left: 10px;
    margin: 0;
`

const P = styled.p`
    font-size: 14px;
`

function Comment(props) {
    //console.log(props);
    return (
        <Div>
        <H5 type="comment">{props.comment.username}</H5>
        <P>{props.comment.text}</P>
        </Div>
    );
}


Comment.propTypes = {
    comment: PropTypes.object
 };

export default Comment;
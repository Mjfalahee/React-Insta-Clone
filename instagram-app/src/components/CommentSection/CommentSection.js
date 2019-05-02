import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import styled, { css } from 'styled-components';
//import './CommentSection.scss';

const Div = styled.div`
    margin:0;
    padding:0;
    display: flex;
    flex-direction: column;
`

const Form = styled.form`
    display: flex;
    justify-content: flex-start;
    border: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 100%;
`

const Input = styled.input`
    border: none;
    border-top: 1px solid lightgrey;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 97%;
    height: 40%;
`


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            commentState: [],
            comment: ''
        }
       }

    componentDidMount() {
        console.log('Comment CDM')
        this.setState({commentState: this.props.comments});
    }

    addNewComment = event => {
        event.preventDefault(); //prevents browser from refreshing
        let newcomment = {text: this.state.comment, username: localStorage.getItem('username')};
        let commentscurrently = this.state.commentState;
        console.log(commentscurrently);
        commentscurrently.push(newcomment);
        this.setState({commentscurrently, comment: ''});
        }


    commentHandler = element => {
        this.setState({comment: element.target.value});
       }


    render() {
        return (
            <Div>
            {this.state.commentState.map(comment => <Comment comment={comment} key={comment.text}/>)}
            <Form onSubmit= {this.addNewComment}>
                <Input
                type="text" 
                placeholder="Add a comment..."
                name="comment"
                value= {this.state.comment}
                onChange = {this.commentHandler}
                />
            </Form>
            </Div>
        );
      }
    }

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
 };

export default CommentSection;
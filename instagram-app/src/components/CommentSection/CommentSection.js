import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.scss';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        //console.log('CommentSection constructor');
        //console.log(props);
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
        //console.log(this.state.commentState);
        //console.log(this.state.comment);
        return (
            <div className = "comment-section">
            {this.state.commentState.map(comment => <Comment comment={comment} key={comment.text}/>)}
            <form className="commentform" onSubmit= {this.addNewComment}>
                <input className="newcomment" 
                type="text" 
                placeholder="Add a comment..."
                name="comment"
                value= {this.state.comment}
                onChange = {this.commentHandler}
                />
            </form>
            </div>
        );
      }
    }

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
 };

export default CommentSection;
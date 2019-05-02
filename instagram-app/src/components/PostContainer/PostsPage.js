import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import '../../App.scss';
import dummyData from '../../dummy-data';


class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: [],
            searchterm: ''
          }
        }
        componentDidMount() {
          //console.log('CDM is running');
          this.setState({dataset: dummyData});
        }
      
        searchFilter = (e) => {
          e.preventDefault();
          //console.log('filtered');
          let searcharray = this.state.dataset.filter(e => e.username === this.state.searchterm)
          if (searcharray.length === 0) {
            return;
          }
          else {
          console.log(searcharray);
          this.setState({dataset: searcharray}); }
        } 
      
        searchHandler = element => {
          console.log(this.state.searchterm)
          this.setState({searchterm: element.target.value});
         }

                
        logoutHandler() { 
          localStorage.removeItem('username');
          window.location.reload();
        }


        render() {
        console.log(this.state.dataset);
        //console.log('render is running')
        return (
        <div className="App">
            <SearchBar searchHandler={this.searchHandler}
             searchfilterSubmit={this.searchFilter}
             logoutHandler={this.logoutHandler}/>
            <div className="posts">
            {this.state.dataset.map(data => <PostContainer data={data} key={data.timestamp}/>)}
            </div>
        </div>
        );}


    }

export default PostsPage;
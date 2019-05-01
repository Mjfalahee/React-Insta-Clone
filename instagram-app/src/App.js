import React from 'react';
import PropTypes from 'prop-types';
import PostContainer from './components/PostContainer/PostContainer';
import './App.scss';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';


class App extends React.Component {
  constructor() {
    super();
    //console.log('constructor is running');
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
    //console.log(searcharray);
    this.setState({dataset: searcharray});
  }

  searchHandler = element => {
    console.log(this.state.searchterm)
    this.setState({searchterm: element.target.value});
   }
  render() {
    console.log(this.state.dataset);
    //console.log('render is running')
    return (
    <div className="App">
      <SearchBar searchHandler={this.searchHandler} searchfilterSubmit={this.searchFilter}/>
      <div className="posts">
        {this.state.dataset.map(data => <PostContainer data={data} key={data.timestamp}/>)}
      </div>
    </div>
    );}
}

export default App;

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
    console.log('filtered');
  }

  searchHandler
  render() {
    //console.log('render is running')
    return (
    <div className="App">
      <SearchBar />
      <div className="posts">
        {this.state.dataset.map(data => <PostContainer data={data} key={data.timestamp}/>)}
      </div>
    </div>
    );}
}

export default App;

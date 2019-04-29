import React from 'react';
import PropTypes from 'prop-types';
import PostContainer from './components/PostContainer/PostContainer';
import './App.scss';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataset: dummyData
    }
  }
  render() {
    return (
    <div className="App">
      <SearchBar />
      <div className="posts">
        {this.state.dataset.map(data => <PostContainer data={data} key={data.id}/>)}
      </div>
    </div>
    );}
}

export default App;

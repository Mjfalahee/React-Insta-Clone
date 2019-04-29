import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';


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
      <header className="App-header">
      </header>
      <div>
        {this.state.dataset.map(data => <PostContainer data={data} key={data.id}/>)}
      </div>
    </div>
    );}
}

export default App;

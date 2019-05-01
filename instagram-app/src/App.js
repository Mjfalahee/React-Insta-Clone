import React from 'react';
import withAuthenticate from './components/Authentication/withAuthenticate';
import PostsPage from './components/PostContainer/PostsPage';
import './App.scss';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

function App() {
  console.log(ComponentFromWithAuthenticate);
    return (
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    )
}

export default App;

import React from 'react';
import withAuthenticate from './components/Authentication/withAuthenticate';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import './App.scss';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

function App() {
    //localStorage.removeItem('user');
    return (
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    )
}

export default App;

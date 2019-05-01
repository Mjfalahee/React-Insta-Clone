import React from 'react';
import './Login.scss';

//window.location.reload()

// const loginHandler = e => {
//     e.preventDefault();
//     if (localStorage.getItem('username')) {
//         localStorage.removeItem('username');
//     }
//     else {
//         localStorage.setItem('username', 'Michael');
//     }
// };


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    //handleinputchange
    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
       }


    //loginhandler
    loginHandler = e => {
        const account = this.state.username;
        const password = this.state.password;
        localStorage.setItem('username', account);
        localStorage.setItem('password', password);
        window.location.reload();
    }

    render() {
    return (
            <div className='login-page'>
                <h3> Please log in to access the site!</h3>
                <form onSubmit={this.loginHandler}>
                    <input className="user" 
                    type="text" 
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.inputHandler}/>
                </form>
                <form onSubmit={this.loginHandler}>
                    <input className="pass" 
                    type="text" 
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.inputHandler}/>
                 </form>

                <button className="login-button" onClick={this.loginHandler}>Login</button>
            </div>
        );
    }
}

export default Login;
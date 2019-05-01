import React from 'react';
import './Login.scss';

//window.location.reload()

const loginHandler = e => {
    e.preventDefault();
    if (localStorage.getItem('username')) {
        localStorage.removeItem('username');
    }
    else {
        localStorage.setItem('username', 'Michael');
    }
};


function Login(){

    return (
            <div>
                <h3> Please log in to access the site!</h3>

                <form onSubmit="">
                    <input className="user" type="text" placeholder="Username"/>
                    <input className="pass" type="text" placeholder="Password"/>
                 </form>

                <button className="login-button" onClick={loginHandler}>Login</button>
            </div>
        );
    }

export default Login;
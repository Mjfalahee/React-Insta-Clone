import React from 'react';


const withAuthenticate = FirstComp => SecondComp =>
class extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn : false,
            username: '',
            password: ''
        }
    }


    componentDidMount() {
        if (localStorage.getItem('username')) 
            this.setState({loggedIn : true});
        else
            this.setState({loggedIn : false});
    }
    render() {
        if (this.state.loggedIn)
            return <FirstComp />;
        else {
            return <SecondComp />
        }
    }
}


export default withAuthenticate;
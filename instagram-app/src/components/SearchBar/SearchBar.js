import React from 'react';
//import './SearchBar.scss';
import styled, { css } from 'styled-components';


const Div = styled.div` 
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: nowrap;

        ${props => (props.type === 'left' ? `
        display: flex;
        margin-right: auto;
        align-items: center;` : null)}
        ${props => (props.type === 'right' ? `
        display: flex;
        margin-left: auto;` : null)}
`

const H3 = styled.h3`
        border-left: 1px solid grey;
        margin: 0;
        font-family: 'Oleo Script', cursive;
        font-size: 25px;
        font-weight: 200;
        padding-left: 10px;
        padding-right: 10px;
`

const Form = styled.form`
        margin: 0 auto;
`

const Img = styled.img`
        ${props => (props.type === 'brand' ? `
            width: 30px;
            padding-right: 10px;` : null)}
        ${props => (props.type === 'icon' ? `
            margin-left: 5px;
            width: 30%;
            height: 30px;` : null)}
`

const Input = styled.input`
        text-align: center;
        width: 200px;
        height: 30px;
        opacity: 0.7;
        border: 1px solid grey;
        border-radius: 3px;
        background-color: lightgrey;
        color: grey;
`

const Button = styled.button`
        margin: 0;
        background-color: lightcoral;
        height: 30px;
        width: 40px;
        font-size: 10px;
        display: flex;
        justify-content: center;
`




function SearchBar(props) {
    return (
        <Div>
            <Div type="left" >
                <Img type='brand' src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="Insta" />
                <H3>Instagram</H3>
            </Div>
            <Form
            onSubmit={props.searchfilterSubmit}>
             {/* <img className="searchicon"
                src='https://img.icons8.com/ios/50/000000/search.png'
                alt=''/> */}
                <Input className="searchinput"
                onChange={props.searchHandler}
                type="text"
                placeholder="Search" 
                //'https://img.icons8.com/ios/50/000000/search.png'
                />
            </Form>
            <Div type="right">
                <Button type="logout" onClick={props.logoutHandler}> Logout </Button>
                <Img type="icon"
                src="https://img.icons8.com/android/24/000000/compass.png" 
                alt="Compass" />
                <Img type="icon"
                src="https://img.icons8.com/windows/32/000000/like.png" 
                alt="Heart" />
                <Img type="icon"
                src="https://img.icons8.com/ios/50/000000/user.png" 
                alt="Man" />
            </Div>
        </Div>
    )
}


export default SearchBar;
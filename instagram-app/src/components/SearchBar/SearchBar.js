import React from 'react';
import './SearchBar.scss';


function SearchBar() {
    return (
        <div className="searchbar">
            <div className="left-group">
                <img className="brandimg" src="" alt="Insta" />
                <h3>Instagram</h3>
            </div>
            <form>
                <input className="searchinput"
                type="text"
                placeholder="Search" />
            </form>
            <div className="right-group">
                <img className="icon"
                src="" 
                alt="Compass" />
                <img className="icon"
                src="" 
                alt="Heart" />
                <img className="icon"
                src="" 
                alt="Man" />
            </div>
        </div>
    )
}


export default SearchBar;
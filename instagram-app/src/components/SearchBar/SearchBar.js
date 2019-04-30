import React from 'react';
import './SearchBar.scss';


function SearchBar() {
    return (
        <div className="searchbar">
            <div className="left-group">
                <img className="brandimg" src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="Insta" />
                <h3>Instagram</h3>
            </div>
            <form className="searchform">
                <input className="searchinput"
                type="text"
                placeholder="Search" />
                {/* https://img.icons8.com/ios/50/000000/search.png */}
            </form>
            <div className="right-group">
                <img className="icon"
                src="https://img.icons8.com/android/24/000000/compass.png" 
                alt="Compass" />
                <img className="icon"
                src="https://img.icons8.com/windows/32/000000/like.png" 
                alt="Heart" />
                <img className="icon"
                src="https://img.icons8.com/ios/50/000000/user.png" 
                alt="Man" />
            </div>
        </div>
    )
}


export default SearchBar;
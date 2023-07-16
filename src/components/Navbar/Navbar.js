import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-logo-search-container">
                <div>
                    <img className="navbar-logo" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Logo" />
                </div>
                <div className="navbar-search-container">
                    <div className="search-bar">
                        <img className="location-picture" src="https://img.icons8.com/officel/16/marker.png" />
                        <input className="location-input" placeholder="City" />
                        <div>
                            <img className="arrow-picture" src="https://img.icons8.com/ios-glyphs/30/sort-down.png" />
                            <img className="vertical-line" src="https://img.icons8.com/ios/50/vertical-line.png" />
                        </div>
                    </div>
                    <div className="search-icon-container">
                        <img className="search-icon-picture" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-search-logistic-delivery-kiranshastry-solid-kiranshastry.png" />
                        <input className="search-restaurant-input" placeholder="Search for restaurant, cuisine or a dish" />
                    </div>
                </div>
            </div>
            <div className="navbar-login-signup-button-container">
                <button className="navbar-login-button">Log in</button>
                <button className="navbar-login-button">Sign up</button>
            </div>
        </div>
    )

}

export default Navbar;
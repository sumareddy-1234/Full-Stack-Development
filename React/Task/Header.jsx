import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className="header"> 
            <Link to="/" className="options"> Add Data </Link>
            <Link to="/view"  className="options"> View Data </Link>
        </div>
    )
}

export default Header;
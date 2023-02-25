import React from 'react';
import './Navbar.css';
import logo from "./img/Ebooks.png";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    return(
        <div className='navbar'>
            <div className='right-navbar'>
                <img src={logo} alt="logo" />
            </div>
            <div className='left-navbar'>
                
                <p onClick={() => navigate("/")}>HOME</p>
                <p onClick={() => navigate("/books")}>BOOKS</p>
                <p onClick={() => navigate("/Aboutpage")}>ABOUT US</p>
                <p onClick={() => navigate("/Contactpage")}>CONTACT US</p>
                <p onClick={() => navigate("/")}>Log Out</p>
            </div>

        </div>
    )
}
export default Navbar;
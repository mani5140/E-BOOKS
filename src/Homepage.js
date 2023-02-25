import React from 'react';
import logo from './img/logo1.jpg';
import './Homepage.css';

const Homepage = () =>{
    return(
        <div className='homepage'>
            <div class="homepage-col-1">
                    <h3>There is only one thing that<br/> could replace a book:</h3><h2>The next book!</h2>
                    <p>Welcome to all new collection with amazing offers and discounts that you
                         never being seen and the smooth learning that you never experinced !
                    </p>
                    <button>Explore Now</button>
            </div>
            <div class="homepage-col-2">
                    <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Homepage;
import { useState } from "react";
import './Navbar.css';
import FastrentIDLogo from '../../assets/FastrentID.jpg'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [count, setCount] = useState(0);
    
    return (
        <nav className="container">
            <img src={FastrentIDLogo} alt="logo" className="logo"/>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/car">Car</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li> <NavLink to = "/cart"> <button className = "btn">Cart {count}</button></NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;

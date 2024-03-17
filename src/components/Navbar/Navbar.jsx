import { useEffect, useState } from "react";
import './Navbar.css';
import FastrentIDLogo from '../../assets/FastrentID.jpg'
import { NavLink } from "react-router-dom";
import MenuIcon from '../../assets/MenuIcon.png';
import CloseIcon from '../../assets/CloseIcon.jpg';

const Navbar = () => {
    const [count, setCount] = useState(0)
    const [sticky, setSticky] = useState(false);
    const [menuIcon, setMenuIcon] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[])

    const HandleIcon = () => {
        setMenuIcon(!menuIcon)
    }
    
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={FastrentIDLogo} alt="logo" className="logo"/>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/car">Car</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li> <NavLink to = "/cart"> <button className = "btn">Cart {count}</button></NavLink></li>
            </ul>
            {menuIcon ? (
                <img src={CloseIcon} alt="CloseIcon" className="close-icon" onClick={HandleIcon}/>
            ):(
                <img src={MenuIcon} alt="MenuIcon" className="menu-icon" onClick={HandleIcon} />
            )}
        </nav>
    );
}

export default Navbar;

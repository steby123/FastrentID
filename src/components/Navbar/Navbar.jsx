import { useEffect, useState } from "react";
import './Navbar.css';
import FastrentIDLogo from '../../assets/FastrentID.jpg'
import { NavLink } from "react-router-dom";
import MenuIcon from '../../assets/MenuIcon.png';

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
        menuIcon ? setMenuIcon(false) : setMenuIcon(true);
        console.log('click')
    }
    
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={FastrentIDLogo} alt="logo" className="logo"/>
            <ul className={menuIcon ? "" : "hide-mobile-menu"}>
                <li><NavLink to="/" activeClaactiveClassName="active">Home</NavLink></li>
                <li><NavLink to="/car" activeClassName="active">Car</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                <li> <NavLink to = "/cart" activeClassName="active"> <button className = "btn">Cart {count}</button></NavLink></li>
            </ul>
            <img src={MenuIcon} alt="menu-icon" className="menu-icon" onClick={HandleIcon}/>
        </nav>
    );
}

export default Navbar;

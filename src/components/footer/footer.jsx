import { Link } from 'react-router-dom';
import './footer.css'; 

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialIcons'>
                <Link to=""><i className="fab fa-instagram"></i></Link>
                <Link to=""><i className='fab fa-whatsapp'></i></Link>
            </div>
            <div className='footerNav'>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="">Car</Link></li>
                    <li><Link to="">About Us</Link></li>
                    <li><Link to="">Contact</Link></li>
                </ul>
            </div>
            <div className='footerBottom'>
                <p>Copyright &copy; 2024; rent car by <span className='designer'>Fastrent.ID</span></p>
            </div>
        </div>
    );
}

export default Footer;

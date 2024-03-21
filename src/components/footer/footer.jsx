import { Link } from 'react-router-dom';
import './footer.css'; 

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialIcons'>
                <Link to="https://www.instagram.com/fastrent.id?igsh=c3kxdHlyeHViNm9r"><i className="fab fa-instagram"></i></Link>
                <Link to="https://wa.me/+628224713565"><i className='fab fa-whatsapp'></i></Link>
                <Link to="https://www.tiktok.com/@fastrent.id?_t=8kmbrMRcH9L&_r=1"><i className='fab fa-tiktok'></i></Link>
            </div>
            <div className='footerNav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/car">Car</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className='footerBottom'>
                <p>Copyright &copy; 2024; rent car by <span className='designer'>Fastrent.ID</span></p>
            </div>
        </div>
    );
}

export default Footer;

import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    return(
        <>       
            <div className="containers">
                <h1>Kontak kami dan cari tahu lebih lanjut</h1>
                <div className='box-container'>
                    <div className='box'>
                        <Link to="https://www.instagram.com/fastrent.id?igsh=c3kxdHlyeHViNm9r"><i className="fab fa-instagram"></i></Link>
                        <h3>instagram</h3>
                        <p>Ingin konsultasi lebih lanjut? hubungi kami untuk menanyakan apapun gratis!</p>
                        <button><Link to="https://www.instagram.com/fastrent.id?igsh=c3kxdHlyeHViNm9r">Click here!</Link></button>
                    </div>
                    <div className='box'>
                        <Link to="https://wa.me/+628224713565"><i className='fab fa-whatsapp'></i></Link>
                        <h3>whatsapp</h3>
                        <p>Ingin konsultasi lebih lanjut? hubungi kami untuk menanyakan apapun gratis!</p>
                        <button><Link to="https://wa.me/+628224713565">Click here!</Link></button>
                    </div>
                    <div className='box'>
                        <Link to="https://www.tiktok.com/@fastrent.id?_t=8kmbrMRcH9L&_r=1"><i className='fab fa-tiktok'></i></Link>
                        <h3>tiktok</h3>
                        <p>Ingin konsultasi lebih lanjut? hubungi kami untuk menanyakan apapun gratis!</p>
                        <button><Link to="https://www.tiktok.com/@fastrent.id?_t=8kmbrMRcH9L&_r=1">Click here!</Link></button>
                    </div>
                </div>      
            </div>
        </>
    )
}

export default Contact;

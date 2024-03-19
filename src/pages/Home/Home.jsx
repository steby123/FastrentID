import PhotoHome from '../../components/PhotoHome/PhotoHome';
import SelfiePhoto from '../../components/SelfiePhoto/SelfiePhoto';
import WhiteArrowIcon from '../../assets/WhiteArrow.jfif';
import About from '../About/About';
import './Home.css';

const Home = () => {
    return(
        <>
            <div className="containers hero">
                <div className='containers-text'>
                    <h1>NIKMATI PENGALAMAN TERBAIK PERJALANAN ANDA DENGAN FASTRENT.ID</h1>
                    <p>Fastrent menyediakan jasa dan kenyamanan anda saat ingin menyewa ataupun rental mobil didaerah batam</p>
                    <button className='btn dark-btn'>KETAHUI LEBIH LANJUT<img src={WhiteArrowIcon} alt='white-arrow-icon'/></button>
                </div>      
            </div>
            <PhotoHome />
            <About />
            <SelfiePhoto />
        </>
    )
}

export default Home;
import PhotoHome from '../components/PhotoHome/PhotoHome';
import './Home.css';

const Home = () => {
    return(
        <>
            <div className="containers hero">
                <div className='containers-text'>
                    <h1>NIKMATI PENGALAMAN TERBAIK PERJALANAN ANDA DENGAN FASTRENT.ID</h1>
                    <p>Fastrent menyediakan jasa dan kenyamanan anda saat ingin menyewa ataupun rental mobil didaerah batam</p>
                    <button className='btn'>KETAHUI LEBIH LANJUT</button>
                </div>      
            </div>
            <PhotoHome />
        </>
    )
}

export default Home;
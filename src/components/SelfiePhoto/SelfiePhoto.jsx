import FotoSyl from '../../assets/sylvester.jfif';
import FotoSteby from '../../assets/0b94d41c-6a6a-41e9-8d84-5f259a92326c.jfif';
import FotoElfan from '../../assets/Elfan.jfif';
import FotoLidya from '../../assets/Lidya.jfif';
import FotoElvin from '../../assets/Elvin.jfif';
import WhiteArrowIcon from '../../assets/WhiteArrow.jfif';
import './SelfiePhoto.css';
import { useNavigate } from 'react-router-dom';


const SelfiePhoto = () => {
    const navigation = useNavigate();

    const handleClick = () => {
        navigation('/about')
    }

    return(
        <div className="selfie">
            <h1>Tim Fastrent.ID</h1>
            <div className="gallery">
                <div className="img-container">
                    <img src={FotoSteby} alt="Steby" className='img1'/>
                    <h3>Steby</h3>
                    <p>Programmer / FullStack Developer</p>
                </div>
                <div className="img-container">
                    <img src={FotoElfan} alt="Elfan" className='img2'/>
                    <h3>Efan</h3>
                    <p>Illustrator, Design Graphic</p>
                </div>
                <div className="img-container">
                    <img src={FotoSyl} alt="Sylvester" className='img3'/>
                    <h3>Sylvester</h3>
                    <p>Admin</p>
                </div>
                <div className="img-container">
                    <img src={FotoLidya} alt="Lidya" className='img4'/>
                    <h3>Lidya</h3>
                    <p>Digital Marketing, Social Media Management</p>
                </div>
                <div className="img-container">
                    <img src={FotoElvin} alt='' className='img5'/>
                    <h3>Elvin</h3>
                    <p>Admin</p>
                </div>
            </div>
            <button className='btn dark-btn' onClick={handleClick}>See more here!<img src={WhiteArrowIcon} alt='white-arrow-icon'/></button>
        </div>
    )
}


export default SelfiePhoto;
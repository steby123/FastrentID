import './PhotoHome.css';
import MobilMpv from '../../assets/Desain-tanpa-judul-35.jpg';
import MobilSuv from '../../assets/images.jpg';
import MobilSedan from '../../assets/download.jpg';
import MobilAlphad from '../../assets/toyota-alphard-terbaru.png';

const PhotoHome = () => {
    return(
        <div className="programs">
            <div className="program">
                <img src={MobilMpv} alt="Mobil MPV" />
            </div>
            <div className="program">
                <img src={MobilSuv} alt="Mobil SUV" />
            </div>
            <div className="program">
                <img src={MobilSedan} alt="Mobil Sedan" />
            </div>
            <div className="program">
                <img src={MobilAlphad} alt="Mobil Minivan" />
            </div>
        </div>
    )
}

export default PhotoHome;   
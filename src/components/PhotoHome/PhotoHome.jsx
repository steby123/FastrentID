import './PhotoHome.css';
import MobilMpv from '../../assets/Desain-tanpa-judul-35.jpg';
import MobilSuv from '../../assets/images.jpg';
import MobilSedan from '../../assets/download.jpg';
import MobilAlphad from '../../assets/Mobil-MiniVan.png';
import Title from '../Title/Title';

const PhotoHome = () => {
    return(
        <>
        <Title subTitle="Our Car" offer="What We Offer"/>
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
        </>
    )
}

export default PhotoHome;   
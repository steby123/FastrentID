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
                <h3>Mobil MPV</h3>
            </div>
            <div className="program">
                <img src={MobilSuv} alt="Mobil SUV" />
                <h3>Mobil SUV</h3>
            </div>
            <div className="program">
                <img src={MobilSedan} alt="Mobil Sedan" />
                <h3>Mobil Sedan</h3>
            </div>
            <div className="program">
                <img src={MobilAlphad} alt="Mobil Minivan" />
                <h3>Mobil Minivan</h3>
            </div>
        </div>
        </>
    )
}

export default PhotoHome;   
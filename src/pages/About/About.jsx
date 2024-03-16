import PromosiFastrentID from '../../assets/PromosiFastrentID.jpg';
import './About.css';

const About = () => {
    return(
        <div className="about">
            <div className="about-left">
                <img src={PromosiFastrentID} alt="PromosiFastrentID" className="about-img" />
            </div>
            <div className="about-right">
                <h3>ABOUT FASTRENT.ID</h3>
                <h2> Immediately rent a car here before it runs out </h2>
                <p>Customers love getting more value than what they pay for. Offer special offers such as discounts, vacation packages or free services as part of your promotions.</p>
                <p>Using drivers max 12 hours or per date Vehicles Using Driver + Fuel for All Needs (In City) Prices outside the holiday season, Eid, Christmas & New Year Cars Above 2015+ Does not include parking toll (if used) and driver meals Overtime 10% per hour of rental price</p>
                <p>REMEMBER BATAM CAR RENTAL? DEFINITELY REMEMBER FASTRENT.ID!!!</p>            
            </div>
        </div>
    )
}

export default About;
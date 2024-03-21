import PromosiFastrentID from '../../assets/PromosiFastrentID.jpg';
import SelfiePhoto from '../../components/SelfiePhoto/SelfiePhoto';
import FotoLogo from '../../assets/FastrentID.jpg';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
    return(
        <>
            <div className="containers">
                <div className="about">
                    <div className="about-right">
                        <h3>ABOUT FASTRENT.ID</h3>
                        <h2> Welcome to Fastrent.ID BATAM </h2>
                        <p>Welcome to Fastrent.ID Batam. Our company strives to give the best customer service to our clients. Bella Rental brings you many choices for your next car rental in Puerto Rico. Call us or use this website to learn more about us and make your reservation. Our current rental fleet includes Honda, Toyota, Mazda, Cherry, Jeep, BMW, Subaru, Ford and Lexus</p>
                        <p>At Batam FastrentID, a group team branch to Fastrent.ID rental car, our mission is to provide a hassle free and affordable car rental service to our valuable customers residing or working in the eastern parts of Indonesia at Batam.</p>
                        <p>By renting from us, all expenses such as maintenance, road tax and insurance are covered by us as you rent only when you need! Have a peace of mind while driving as we also provide a 24 hours Breakdown Response Service and replacement of vehicle (subjected to availability) should our vehicle fail.</p>
                        <p>We dedicate our effort in ensuring that all our vehicles are clean and well-maintained for your daily usage to provide all our valued customers an optimum driving experience with us.</p>
                        <p>Our friendly Customer Service Officer will be more than happy to answer any calls or enquiries you may have! Driving in Indonesia at BATAM has never been so simple and convenient before, call us NOW to <Link to="https://wa.me/+628224713565">find out more!</Link></p>
                        <p>REMEMBER BATAM CAR RENTAL? DEFINITELY REMEMBER FASTRENT.ID!!!</p>            
                    </div>
                    <div className="about-left">
                        <img src={FotoLogo} alt="Fastrent.ID" className="about-img" />
                    </div>
                </div>

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
                <SelfiePhoto />
            </div>
        </>
    )
}

export default AboutUs
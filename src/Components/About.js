import aboutimage from '../images/about.png';
import Navbar from './Navbar';


const About = () => {
    return (
        <div id="about">
            <Navbar/>
            <div className="about-text">
      	        <h1>UPCOMING EVENT</h1>
      	        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum
      	           cum expedita. Voluptas ratione beate sant incidunt, in delectus doloremque
      	           aliquid, lure tempora ad nobis.</p>
      	        <button>Read More</button>
            </div>

            <div className="about-image">
      	        <img src={aboutimage} alt="" />
            </div>
        </div>
    );
}

export default About;
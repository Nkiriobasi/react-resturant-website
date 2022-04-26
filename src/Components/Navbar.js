import {useState} from 'react';
// import {Link} from 'react-scroll';
import logo from '../images/logo1.png';

const Navbar = () => {

  const [nav,setNav] = useState(false);

  const changeBackground = () => {
    (window.scrollY >= 50) ? setNav(true) : setNav(false);
  }


  window.addEventListener('scroll',changeBackground);

  return (
  	<nav className={nav ? "nav active" : "nav"}>
     <div className='logo'>
       <img src={logo} alt=""/>
     </div>
     <input className='menu-btn' type='checkbox' id='menu-btn'/>
     <label className='menu-icon' htmlFor='menu-btn'>
       <span className='nav-icon'></span>
     </label>
     <ul className="menu">
       <li>Home</li>
       <li>Products</li>
       <li>About</li>
       <li>Contact</li>
     </ul>
    </nav>
  );
}

export default Navbar;
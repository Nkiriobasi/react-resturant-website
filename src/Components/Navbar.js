import {useState} from 'react';
// import {Link} from 'react-scroll';
import logo from '../images/logo1.png';
import { Link } from 'react-router-dom';

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
       <li>
         <Link to='/'>Home</Link>
       </li>
       <li>
         <Link to='/products'>Products</Link>
       </li>
       <li>
         <Link to='/about'>About</Link>
       </li>
       <li>
         <Link to='/contact'>Contact</Link>
       </li>
     </ul>
    </nav>
  );
}

export default Navbar;
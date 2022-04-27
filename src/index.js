import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';

// ReactDOM.render(<App />, document.getElementById('root'));
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<Router>
		<Routes>
			<Route path='/' element={<App/>} />
			<Route path='/products' element={<Products/>} />
			<Route path='/about' element={<About/>} />
			<Route path='/contact' element={<Contact/>} />
		</Routes>
	</Router>
)


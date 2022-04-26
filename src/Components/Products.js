import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';

const Products = () => {
  return (
  	<div id="products">
  		<h1>CHOOSE & ENJOY</h1>
  		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxine venian
  		   voluptate, quis nostrum aliquid!</p>
  		<div className="a-container">
  			<Productbox image={pimage1} title="Veggie Burger"/>
  			<Productbox image={pimage2} title="Beef Burger"/>
  			<Productbox image={pimage2} title="Elk Burger"/>
  		</div>
  	</div>
  );
}

export default Products;
import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/icons/logo.PNG';
import shoppingCart from '../assets/icons/shopping_cart.svg';

const Header = () => {
  
	return(
		<>
			<header className="header">
			<div className="wrapper">
				<img className="header__img" src={logo} alt="Logo" />
				<button className="header__bag">
				<img src={shoppingCart} alt="bag" />
				<span>3</span>
				</button>          
			</div>        
			</header>
		</>
	);
}
  
  export default Header;
import React from 'react';

// import productsImg from '../images/products.jpg';
// import capabilitiesImg from '../images/capabilities.jpg';
// import companyImg from '../images/company.jpg';

import styles from './nav-menu.module.css';
// import PageCardList from './page-card-list.js';
import ContactForm from './contact-form.js';
import NavList from './nav-list.js';

console.log(styles);

// let mockCards = [
// 	{
// 		title: "Products",
// 		imgSrc: productsImg,
// 		imgAlt: "Aro product image",
// 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
// 	},
// 	{
// 		title: "Capabilities",
// 		imgSrc: capabilitiesImg,
// 		imgAlt: "Aro capabilities image",
// 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
// 	},
// 	{	
// 		title: "Company",
// 		imgSrc: companyImg,
// 		imgAlt: "Aro company image",
// 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
// 	}		
// ];

// <ContactForm/>
// <PageCardList cardList={mockCards}/>

export default function NavMenu(props) {
	return (
		props.showMenu ? (
			<nav role="navigation">
				<button onClick={props.handleClick} className={styles.menuButton} hidden><i className="fas fa-bars"></i> Menu</button>
				<div className={`${styles.showMenu}  ${styles.menu}`}>
					<button onClick={props.handleClick} className={styles.closeMenuButton}>X</button>
					<NavList/>
					<ContactForm/>				
				</div>
			</nav>)
		: (
			<nav role="navigation">
				<button onClick={props.handleClick} className={`${styles.menuButton} ${styles[props.buttonColor]}`}><i className="fas fa-bars"></i> Menu</button>
				<div className={styles.menu}>
					<button onClick={props.handleClick} className={styles.closeMenuButton}>X</button>
					<NavList/>
					<ContactForm/>								
				</div>
			</nav>
		)
	)
}
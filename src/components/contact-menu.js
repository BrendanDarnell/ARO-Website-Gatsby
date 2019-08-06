import React from 'react';

// import productsImg from '../images/products.jpg';
// import capabilitiesImg from '../images/capabilities.jpg';
// import companyImg from '../images/company.jpg';

import styles from './contact-menu.module.css';
// import PageCardList from './page-card-list.js';
import ContactForm from './contact-form.js';


export default function ContactMenu(props) {
	return (
		props.showMenu ? (
			<div className={styles.contactDiv}>
				<button onClick={props.handleClick} className={styles.menuButton} hidden>Contact Us</button>
				<div className={`${styles.showMenu}  ${styles.menu}`}>
					<button onClick={props.handleClick} className={styles.closeMenuButton}>X</button>
					<ContactForm/>				
				</div>
			</div>)
		: (
			<div className={styles.contactDiv}>
				<button onClick={props.handleClick} className={`${styles.menuButton} ${styles[props.buttonColor]}`}>Contact Us</button>
				<div className={styles.menu}>
					<button onClick={props.handleClick} className={styles.closeMenuButton}>X</button>
					<ContactForm/>								
				</div>
			</div>
		)
	)
}
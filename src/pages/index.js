import React from 'react';

import aroRot from '../../static/aro-rotation.mp4';
// import productsImg from '../images/products.jpg';
// import capabilitiesImg from '../images/capabilities.jpg';
// import companyImg from '../images/company.jpg';

import styles from './index.module.css';
import VideoBanner from '../components/video-banner.js';
// import PageCard from './page-card.js';
import NavMenu from '../components/nav-menu.js';
import Head from '../components/head.js';

console.log(styles);
console.log(styles["landing-header"])
console.log(styles.logoNavContainer);

	// <nav role="navigation">
	// 						<ul className="nav-list">
	// 							<li>Products</li>
	// 							<li>Capabilities</li>
	// 							<li>Contact Us</li>
	// 						</ul>
	// 					</nav>

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

export default class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		}
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		console.log('showMenu', this.state.showMenu);
		this.setState(state => ({
			showMenu: !state.showMenu
		}));	
	}

	render() {
		
		return (
			<React.Fragment>
				<Head/>
				<header className={styles.landingHeader} role="banner">
					<div className={styles.logoNavContainer}>
						<h1 className={styles.logo}>ARO</h1>
						<NavMenu handleClick={this.toggleMenu} showMenu={this.state.showMenu} buttonColor="white"/>
					</div>
					<VideoBanner video={aroRot}/>
				</header>
				
				<main role="main">
					
				</main>
			</React.Fragment>
		)
	}
}

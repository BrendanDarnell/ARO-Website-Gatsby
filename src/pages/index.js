import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

// import aroRot from '../../static/aro-rotation.mp4';
// import night from '../../static/night.mp4';
// import rain from '../../static/Rain.mp4';
import introVid from '../../static/aro-video.mp4';
// const VideoBanner = React.lazy(() => import('../components/video-banner.js'));
import logo from '../../static/logo.png';



// import productsImg from '../images/products.jpg';
// import capabilitiesImg from '../images/capabilities.jpg';
// import companyImg from '../images/company.jpg';

import styles from './index.module.css';
// import VideoShow from '../components/video-show.js';
import VideoBanner from '../components/video-banner.js';
// import PageCard from './page-card.js';
// import NavMenu from '../components/nav-menu.js';
import NavList from '../components/nav-list.js';
import Head from '../components/head.js';
import Footer from '../components/footer.js';
// import ContactMenu from '../components/contact-menu.js';
// import NewsTicker from '../components/news-ticker.js'

// console.log(styles);
// console.log(styles["landing-header"])
// console.log(styles.logoNavContainer);

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
// <NavMenu handleClick={this.toggleMenu} showMenu={this.state.showMenu} buttonColor="white"/>

export default class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageLoaded: false
		}
		this.handlePageLoad = this.handlePageLoad.bind(this);
	}

	componentDidMount() {
		this.test = 'foobar';
		this.dbl = window.addEventListener('dblclick', this.handlePageLoad);
		this.load = window.addEventListener('load', ()=>console.log('loaded'));
		this.ready = document.addEventListener('readystatechange', () => console.log('readyState', document.readyState));
		console.log('home page mounted');
	}

	handlePageLoad() {
		this.setState({pageLoaded: true});
		console.log('handlePageLoadCalled');
		console.log(this.load, this.dbl, this.test);
	}

	render() {
		
		return (
			<React.Fragment>
				<Head/>
				<header className={styles.landingHeader} role="banner">
					<div className={styles.logoNavContainer}>
						<img className={styles.logo} src={logo} alt="Alpine Research Optics Logo"/>
						<NavList hasTopLevelLink={false}/>
					</div>
				</header>
				
				<main role="main">
					{this.state.pageLoaded && 
						<VideoBanner video={introVid}/>}
					<div className={styles.videoHeader}>
						<h1 className={styles.h1}>Alpine Research Optics</h1>
						<h2 className={styles.bannerText}>A Precision Optics Company</h2>
						<AniLink to={'get-in-touch'} cover direction="right" duration={2} bg="#5b58a5" className={styles.contact}>Get In Touch</AniLink>
					</div>
				</main>
				{/*<Footer/>*/}
			</React.Fragment>
		)
	}
}

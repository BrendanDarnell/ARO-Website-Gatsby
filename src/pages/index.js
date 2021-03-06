import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import throttle from 'lodash/throttle';

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
import Header from '../components/header.js';
// import VideoShow from '../components/video-show.js';
import VideoBanner from '../components/video-banner.js';
// import PageCard from './page-card.js';
// import NavMenu from '../components/nav-menu.js';
import NavList from '../components/nav-list.js';
import Head from '../components/head.js';
import Footer from '../components/footer.js';
import building from '../../static/company.jpg';
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
			pageLoaded: false,
			pageScrolled: false
		}
		this.handlePageLoad = this.handlePageLoad.bind(this);
		this.initVideoHeaderPosition = this.initVideoHeaderPosition.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.videoHeader = React.createRef();
	}

	componentDidMount() {
		console.log(document.readyState);
		if (document.readyState === 'complete') {
			this.handlePageLoad();
		}
		else{
			let loadListener = window.addEventListener('load', this.handlePageLoad);
		}
		// this.handlePageLoad();
		this.initVideoHeaderPosition();
		let scrollListener = window.addEventListener('scroll', throttle(this.handleScroll, 100));
		// this.test = 'foobar';
		// this.dbl = window.addEventListener('dblclick', this.handlePageLoad);
		// this.load = window.addEventListener('load', ()=>console.log('loaded'));
		// this.ready = document.addEventListener('readystatechange', () => console.log('readyState', document.readyState));
		// console.log('home page mounted');
	}

	componentDidUpdate(prevProps,prevState) {
		if(prevState.pageLoaded !== this.state.pageLoaded) {
			window.objectFitPolyfill();
		}

	}

	handlePageLoad() {
		this.setState({pageLoaded: true});
		console.log('handlePageLoadCalled');
		console.log(this.load, this.dbl, this.test);
	}

	initVideoHeaderPosition() {
		const videoHeader = document.getElementById('videoHeader');
		const initPosition = window.pageYOffset + videoHeader.getBoundingClientRect().top;
		this.setState({initVideoHeaderPosition: initPosition}); 
	}

	handleScroll() {
		const videoHeader = document.getElementById('videoHeader');
		const videoHeaderPosition = videoHeader.getBoundingClientRect();
		const videoHeaderHeight = videoHeaderPosition.bottom + videoHeaderPosition.top;
		// const midVideoHeaderPosition = (videoHeaderPosition.top + videoHeaderPosition.bottom)/2;
		// console.log(midVideoHeaderPosition);
		const videoHeaderOpacity = 1 - ((this.state.initVideoHeaderPosition - videoHeaderPosition.top)/(this.state.initVideoHeaderPosition + (videoHeaderHeight/2)));
		// const opacityChange = Math.abs(this.state.videoHeaderOpacity - videoHeaderOpacity)
		if(window.pageYOffset === 0) {
			// if(videoHeaderOpacity >= 1 && this.state.videoHeaderOpacity !==1) {
			// 	return this.setState({videoHeaderOpacity: 1, pageScrolled: false});	
			// }
			if(this.state.pageScrolled !== false) {
				this.setState({pageScrolled: false});
			}
			this.videoHeader.current.style.opacity = 1;

		}
		else {
			if(this.state.pageScrolled !== true) {
				this.setState({pageScrolled: true});
			}
			if(videoHeaderOpacity > 0 && videoHeaderOpacity < 1) {
				this.videoHeader.current.style.opacity = videoHeaderOpacity;
			}
			else if(videoHeaderOpacity <= 0 && this.videoHeader.current.style.opacity !== 0) {
				this.videoHeader.current.style.opacity = 0;
			}
		}
	}

	render() {
		
		return (
			<React.Fragment>
				<Head/>
				{/*<header className={styles.landingHeader} role="banner">
					<div className={`${styles.logoNavContainer} ${this.state.pageScrolled && styles.active}`}>
						<img className={styles.logo} src={logo} alt="Alpine Research Optics Logo"/>
						<NavList hasTopLevelLink={false} active={this.state.pageScrolled ? "active" : null}/>
					</div>
				</header>*/}
				<Header active={this.state.pageScrolled}/> 
				
				<main role="main">
					<div className={styles.bannerContainer}>
						{this.state.pageLoaded && 
							<VideoBanner video={introVid}/>}
						<div className={styles.videoHeading} ref={this.videoHeader} id="videoHeader" style={{opacity: 1}}>
							<h1 className={styles.h1}>Alpine Research Optics</h1>
							<h2 className={styles.bannerText}>A Precision Optics Company</h2>
							<AniLink to={'get-in-touch'} cover direction="right" duration={2} bg="#5b58a5" className={styles.contact}>Get In Touch</AniLink>
						</div>
					</div>
					
					<section className={styles.aroExperience}>
						<h2 className={styles.aroExperienceHeading}>THE ARO EXPERIENCE</h2>
						<p className={styles.aroExperienceIntro}>
							ARO has been a vertically integrated precision optics since 1991.  
							ARO’s 40,000 ft<sup>2</sup> facility gives us plenty of room for the ability to 
							control quality inputs and outputs from fabriation through assembly. 
						</p>
						<ul className={styles.aroExperienceList}>
							<li className={`${styles.aroExperienceItem} ${styles.white}`}>
								<div className={styles.aroExperienceItemContent}>
									<h3 className={styles.aroExperienceItemHeading}>Who We Are</h3>
									<p className={styles.aroExperienceItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus posuere vulputate. Duis et sapien et arcu congue aliquet. 
										Cras ut tellus ultrices, consectetur lacus id, porttitor arcu. Integer ut commodo ligula. Phasellus vulputate nisi sapien. Nulla facilisi. 
										Nam fringilla accumsan pellentesque. Aliquam iaculis mauris magna, non pharetra quam tincidunt a. Sed suscipit, massa id faucibus ultricies, 
										purus erat euismod odio, vitae sollicitudin nisl ipsum nec odio.
									</p>
									<a href="#videoHeader" className={styles.aroExperienceLink}>Learn More</a>
								</div>
								<div className={styles.aroExperienceItemImage}>
									<img src={building} alt="aro-facility"/>
								</div>
							</li>
							<li className={`${styles.aroExperienceItem} ${styles.purple} ${styles.reverse}`}>
								<div className={styles.aroExperienceItemContent}>
									<h3 className={styles.aroExperienceItemHeading}>Our Facility</h3>
									<p className={styles.aroExperienceItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus posuere vulputate. Duis et sapien et arcu congue aliquet. 
										Cras ut tellus ultrices, consectetur lacus id, porttitor arcu. Integer ut commodo ligula. Phasellus vulputate nisi sapien. Nulla facilisi. 
										Nam fringilla accumsan pellentesque. Aliquam iaculis mauris magna, non pharetra quam tincidunt a. Sed suscipit, massa id faucibus ultricies, 
										purus erat euismod odio, vitae sollicitudin nisl ipsum nec odio.
									</p>
									<a href="#videoHeader" className={styles.aroExperienceLink}>Learn More</a>
								</div>
								<div className={styles.aroExperienceItemImage}>
									<img src={building} alt="aro-facility"/>
								</div>
							</li>
							<li className={`${styles.aroExperienceItem} ${styles.white}`}>
								<div className={styles.aroExperienceItemContent}>
									<h3 className={styles.aroExperienceItemHeading}>Custom Optics</h3>
									<p className={styles.aroExperienceItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus posuere vulputate. Duis et sapien et arcu congue aliquet. 
										Cras ut tellus ultrices, consectetur lacus id, porttitor arcu. Integer ut commodo ligula. Phasellus vulputate nisi sapien. Nulla facilisi. 
										Nam fringilla accumsan pellentesque. Aliquam iaculis mauris magna, non pharetra quam tincidunt a. Sed suscipit, massa id faucibus ultricies, 
										purus erat euismod odio, vitae sollicitudin nisl ipsum nec odio.
									</p>
									<a href="#videoHeader" className={styles.aroExperienceLink}>Learn More</a>
								</div>
								<div className={styles.aroExperienceItemImage}>
									<img src={building} alt="aro-facility"/>
								</div>
							</li>
							<li className={`${styles.aroExperienceItem} ${styles.blue} ${styles.reverse}`}>
								<div className={styles.aroExperienceItemContent}>
									<h3 className={styles.aroExperienceItemHeading}>Beyond Optics</h3>
									<p className={styles.aroExperienceItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus posuere vulputate. Duis et sapien et arcu congue aliquet. 
										Cras ut tellus ultrices, consectetur lacus id, porttitor arcu. Integer ut commodo ligula. Phasellus vulputate nisi sapien. Nulla facilisi. 
										Nam fringilla accumsan pellentesque. Aliquam iaculis mauris magna, non pharetra quam tincidunt a. Sed suscipit, massa id faucibus ultricies, 
										purus erat euismod odio, vitae sollicitudin nisl ipsum nec odio.
									</p>
									<a href="#videoHeader" className={styles.aroExperienceLink}>Learn More</a>
								</div>
								<div className={styles.aroExperienceItemImage}>
									<img src={building} alt="aro-facility"/>
								</div>
							</li>
							<li className={`${styles.aroExperienceItem} ${styles.white}`}>
								<div className={styles.aroExperienceItemContent}>
									<h3 className={styles.aroExperienceItemHeading}>Metrology</h3>
									<p className={styles.aroExperienceItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus posuere vulputate. Duis et sapien et arcu congue aliquet. 
										Cras ut tellus ultrices, consectetur lacus id, porttitor arcu. Integer ut commodo ligula. Phasellus vulputate nisi sapien. Nulla facilisi. 
										Nam fringilla accumsan pellentesque. Aliquam iaculis mauris magna, non pharetra quam tincidunt a. Sed suscipit, massa id faucibus ultricies, 
										purus erat euismod odio, vitae sollicitudin nisl ipsum nec odio.
									</p>
									<a href="#videoHeader" className={styles.aroExperienceLink}>Learn More</a>
								</div>
								<div className={styles.aroExperienceItemImage}>
									<img src={building} alt="aro-facility"/>
								</div>
							</li>
						</ul> 

					</section>
					
				</main>
				<Footer/>
			</React.Fragment>
		)
	}
}

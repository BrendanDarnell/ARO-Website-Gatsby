import React from 'react';
import { Transition } from 'react-transition-group';

import Head from '../components/head.js';
import NavMenu from '../components/nav-menu.js';

import styles from './products.module.css';
import cubes from '../../static/Cubes.jpg';
import products from '../../static/products.jpg';

export default class ProductsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
			displaySection: {
				mirrors: true,
				windows: false
			}
		}
		this.toggleMenu = this.toggleMenu.bind(this);
		this.changeDisplaySection = this.changeDisplaySection.bind(this);
	}

	toggleMenu() {
		console.log('showMenu', this.state.showMenu);
		this.setState(state => ({
			showMenu: !state.showMenu
		}));	
	}

	changeDisplaySection(event) {
		event.preventDefault();
		// console.log(typeof event.target.innerHTML)
		// console.log(event.target.innerHTML.toLowerCase());
		let selectedSection = event.target.innerHTML.toLowerCase();
		let updatedDisplaySection = {};
		Object.keys(this.state.displaySection).forEach(section => {
			section === selectedSection ? updatedDisplaySection[section] = true : updatedDisplaySection[section] = false;
		});
		this.setState(() => ({displaySection: updatedDisplaySection}));

	}

	render() {

		return (
			<React.Fragment>
				<Head/>
				<header className={styles.productHeader} role="banner">
					<div className={styles.logoNavContainer}>
						<h1 className={styles.logo}>ARO</h1>
						<NavMenu handleClick={this.toggleMenu} showMenu={this.state.showMenu} buttonColor="purple"/>
					</div>
					<div className={styles.banner}>							
						<img className={styles.bannerImage} src={cubes} alt="ARO Products"/>
						<h2 className={styles.pageTitle}>Products</h2>
					</div>				
				</header>

				<main role="main">
					<ul className={styles.sectionsList}>
						<li><a className={styles.sectionLinks} href="#mirrors" onClick={this.changeDisplaySection}>Mirrors</a></li>
						<li><a className={styles.sectionLinks} href="#windows" onClick={this.changeDisplaySection}>Windows</a></li>
						<li><a className={styles.sectionLinks} href="">Polarizers</a></li>
						<li><a className={styles.sectionLinks} href="">Beam Splitters</a></li>
						<li><a className={styles.sectionLinks} href="">Lenses</a></li>
					</ul>


					<section className={styles.productSection} hidden={!this.state.displaySection.mirrors} id="mirrors">
						<h3 className={styles.sectionTitle}>Mirrors</h3>
						<div className={styles.productInfo}>
							<div className={styles.productImageContainer}>
								<img className={styles.productImage} src={products} alt="ARO Mirrors"/>
							</div>
							<p className={styles.productDescription}>
								Our laser mirrors deliver an unmatched combination of high reflectivity, high damage threshold, 
								excellent mechanical durability and long operation lifetime.  The technology employed to fabricate
								these high performance mirrors has evolved from our extensive experience in producing optics for some of
								the world's most demanding laser systems and applications.  These include the worlds largest laser system
								(at Lawrence Livermore National Laborator Ignition Facility) and beam deliver optics for state-of-the-art
								microlithography tools.  From substrate preparation and thin-film coating through product packaging, the
								same expertise and care that goes into the manufacturing of these cutting edge products is applied to the
								stock and custom built optics available to you.                                                                                                          
							</p>
						</div>
						<ul className={styles.productsList}>
							<li className={styles.product}>
								<h4 className={styles.productTitle}>Custom Mirrors<span className={styles.productSubTitle}> made to order</span></h4>
								<p>Our technical team will review your optical drawing or custom specifications and provide a quote.   Typically we offer:</p>
								<ul className={styles.specsList}>
									<li>Size: 3mm to 400 mm</li>
									<li>Surface roughness: 3Ǻ</li>
									<li>Surface quality: 10/5  Laser Quality (scratch/dig)</li>
									<li>Surface flatness: we routinely provide 1/10λ Peak to Valley for flat mirrors or Irregularity for radius mirrors at 632.8nm,  with the  ability to achieve 1/20λ Peak to Valley
										Standard tolerances include +0/-0.005″ for diameter, length or width and ± 0.005″ for thickness</li>
									<li>Parallelism: 1 minute</li>
									<li>(alternate specifications/tolerances available upon request)</li>
								</ul>
							</li>

							<li className={styles.product}>
								<h4 className={styles.productTitle}>UV Laser Mirrors<span className={styles.productSubTitle}> Excimer</span></h4>
								<p>Our technical team will review your optical drawing or custom specifications and provide a quote.   Typically we offer:</p>
								<ul className={styles.specsList}>
									<li>Size: 3mm to 400 mm</li>
									<li>Surface roughness: 3Ǻ</li>
									<li>Surface quality: 10/5  Laser Quality (scratch/dig)</li>
									<li>Surface flatness: we routinely provide 1/10λ Peak to Valley for flat mirrors or Irregularity for radius mirrors at 632.8nm,  with the  ability to achieve 1/20λ Peak to Valley
										Standard tolerances include +0/-0.005″ for diameter, length or width and ± 0.005″ for thickness</li>
									<li>Parallelism: 1 minute</li>
									<li>(alternate specifications/tolerances available upon request)</li>
								</ul>
							</li>
						</ul>
					</section>

					<section className={styles.productSection} hidden={!this.state.displaySection.windows} id="windows">
						<h3 className={styles.sectionTitle}>Windows</h3>
						<div className={styles.productInfo}>
							<div className={styles.productImageContainer}>
								<img className={styles.productImage} src={products} alt="ARO Mirrors"/>
							</div>
							<p className={styles.productDescription}>
								Our laser mirrors deliver an unmatched combination of high reflectivity, high damage threshold, 
								excellent mechanical durability and long operation lifetime.  The technology employed to fabricate
								these high performance mirrors has evolved from our extensive experience in producing optics for some of
								the world's most demanding laser systems and applications.  These include the worlds largest laser system
								(at Lawrence Livermore National Laborator Ignition Facility) and beam deliver optics for state-of-the-art
								microlithography tools.  From substrate preparation and thin-film coating through product packaging, the
								same expertise and care that goes into the manufacturing of these cutting edge products is applied to the
								stock and custom built optics available to you.                                                                                                          
							</p>
						</div>
						<ul className={styles.productsList}>
							<li className={styles.product}>
								<h4 className={styles.productTitle}>Custom Mirrors<span className={styles.productSubTitle}> made to order</span></h4>
								<p>Our technical team will review your optical drawing or custom specifications and provide a quote.   Typically we offer:</p>
								<ul className={styles.specsList}>
									<li>Size: 3mm to 400 mm</li>
									<li>Surface roughness: 3Ǻ</li>
									<li>Surface quality: 10/5  Laser Quality (scratch/dig)</li>
									<li>Surface flatness: we routinely provide 1/10λ Peak to Valley for flat mirrors or Irregularity for radius mirrors at 632.8nm,  with the  ability to achieve 1/20λ Peak to Valley
										Standard tolerances include +0/-0.005″ for diameter, length or width and ± 0.005″ for thickness</li>
									<li>Parallelism: 1 minute</li>
									<li>(alternate specifications/tolerances available upon request)</li>
								</ul>
							</li>

							<li className={styles.product}>
								<h4 className={styles.productTitle}>UV Laser Mirrors<span className={styles.productSubTitle}> Excimer</span></h4>
								<p>Our technical team will review your optical drawing or custom specifications and provide a quote.   Typically we offer:</p>
								<ul className={styles.specsList}>
									<li>Size: 3mm to 400 mm</li>
									<li>Surface roughness: 3Ǻ</li>
									<li>Surface quality: 10/5  Laser Quality (scratch/dig)</li>
									<li>Surface flatness: we routinely provide 1/10λ Peak to Valley for flat mirrors or Irregularity for radius mirrors at 632.8nm,  with the  ability to achieve 1/20λ Peak to Valley
										Standard tolerances include +0/-0.005″ for diameter, length or width and ± 0.005″ for thickness</li>
									<li>Parallelism: 1 minute</li>
									<li>(alternate specifications/tolerances available upon request)</li>
								</ul>
							</li>
						</ul>
					</section>


				</main>
			</React.Fragment>
		)
	}
}

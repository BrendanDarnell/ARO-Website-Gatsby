import React from 'react';
// import { Link }	from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import ToggleMenu from './toggle-menu.js';

import styles from './nav-list.module.css';


// <li className={styles.li}><AniLink to="/" cover direction="right" duration={2} bg="#5b58a5" className={styles.link}>Home</AniLink></li>
export default class NavList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showContactMenu: false
		}
		this.toggleContactMenu = this.toggleContactMenu.bind(this);
	}

	toggleContactMenu() {
		console.log('showContactMenu', this.state.showContactMenu);
		this.setState(state => ({
			showContactMenu: !state.showContactMenu
		}));	
	}
	
	render () {
		return (
			<div className={styles.navListDiv}>
				<ul className={styles.navList}>
					<li className={styles.mainLi}>
						<ToggleMenu menuItems={['mirrors','lenses']} handleClick={this.toggleContactMenu} showMenu={this.state.showContactMenu} buttonName={'Products'} buttonClassNames={styles.navButton}/>
					</li>
					<li className={styles.mainLi}>
						<button className={styles.navButton}>Markets</button>
					</li>
					<li className={styles.mainLi}>
						<button className={styles.navButton}>Quality</button>
					</li>
					<li className={styles.mainLi}>
						<button className={styles.navButton}>Company</button>
					</li>
					<li className={styles.mainLi}>
						<button className={styles.navButton}>Get In Touch</button>
					</li>
				</ul>
			</div>
		);
	}
}
import React from 'react';
// import { Link }	from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import ToggleMenu from './toggle-menu.js';

import styles from './nav-list.module.css';

const navItems = {
	Products: ['Catalog', 'Mirrors & Windows', 'Prisms & Beamsplitters', 'Polarizers', 'Waveplates'],
	Markets: ['Medical', 'Semiconductors', 'Research'],
	Quality: ['ISO', 'Compliance', 'ITAR', 'CMRT Policy', 'Metrology'],
	Company: ['Supplier Portal', 'Work With Us', 'About Us', 'Facility'],
	'Get In Touch': []
}

const showSubMenuState = {};
Object.keys(navItems).forEach((item, index) => {
  showSubMenuState[item] = false;
})
// <li className={styles.li}><AniLink to="/" cover direction="right" duration={2} bg="#5b58a5" className={styles.link}>Home</AniLink></li>
export default class NavList extends React.Component {
	constructor(props) {
		console.log(showSubMenuState)
		super(props);
		this.state = {
			showSubMenus: showSubMenuState
		}
		this.toggleSubMenus = this.toggleSubMenus.bind(this);
	}

	toggleSubMenus(event) {
		console.log('subMenu',event.target.innerHTML);
		this.setState(state => ({
			showContactMenu: !state.showContactMenu
		}));	
	}
	
	render () {
		const navList = Object.keys(navItems).map((item, index) => {
			return (
				<li key={item} className={styles.mainLi}>
					<ToggleMenu menuItems={navItems[item]} handleClick={this.toggleSubMenus} showMenu={this.state.showSubMenus[item]} buttonName={item} buttonClassNames={styles.navButton}/>
				</li>
			);
		});

		return (
			<div className={styles.navListDiv}>
				<ul className={styles.navList}>
					{navList}
				</ul>
			</div>
		);
	}
}
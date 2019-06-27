import React from 'react';
// import { Link }	from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from './nav-list.module.css';

export default function NavList(props) {
	return (
		<div className={styles.navListDiv}>
			<p className={styles.navigationP}><i className="far fa-compass"></i> Navigation</p>
			<ul className={styles.navList}>
				<li className={styles.li}><AniLink to="/" cover direction="right" duration={2} bg="#5b58a5" className={styles.link}>Home</AniLink></li>
				<li className={styles.li}><AniLink to="/products" cover direction="right" duration={2} bg="#5b58a5" className={styles.link}>Products</AniLink></li>
				<li className={styles.li}>Capabilities</li>
				<li className={styles.li}>Resources</li>
				<li className={styles.li}>Company</li>
			</ul>
		</div>
		);
}
import React from 'react';
import { Link }	from 'gatsby';

import styles from './nav-list.module.css';

export default function NavList(props) {
	return (
		<div className={styles.navListDiv}>
			<p className={styles.navigationP}><i className="far fa-compass"></i> Navigation</p>
			<ul className={styles.navList}>
				<li className={styles.li}><Link to="/products" className={styles.link}>Products</Link></li>
				<li className={styles.li}>Capabilities</li>
				<li className={styles.li}>Resources</li>
				<li className={styles.li}>Company</li>
				<li className={styles.li}>Contact Us</li>
			</ul>
		</div>
		);
}
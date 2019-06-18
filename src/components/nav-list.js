import React from 'react';

import styles from './nav-list.module.css';

export default function NavList(props) {
	return (
		<div className={styles.navListDiv}>
			<p className={styles.navigationP}><i className="far fa-compass"></i> Navigation</p>
			<ul className={styles.navList}>
				<li className={styles.li}>Products</li>
				<li className={styles.li}>Capabilities</li>
				<li className={styles.li}>Resources</li>
				<li className={styles.li}>Company</li>
				<li className={styles.li}>Contact Us</li>
			</ul>
		</div>
		);
}
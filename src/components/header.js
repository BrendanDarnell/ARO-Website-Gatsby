import React from 'react';

import logo from '../../static/logo.png';
import NavList from '../components/nav-list.js';
import styles from './header.module.css';

export default function Header(props) {
	return(
		<header className={styles.landingHeader} role="banner">
			<div className={`${styles.logoNavContainer} ${props.active && styles.active}`}>
				<img className={styles.logo} src={logo} alt="Alpine Research Optics Logo"/>
				<NavList hasTopLevelLink={false} active={props.active ? "active" : null}/>
			</div>
		</header>
	);
}
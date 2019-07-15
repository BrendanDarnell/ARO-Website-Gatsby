import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './toggle-menu.module.css';

export default function ToggleMenu(props) {
	const menuAnimation = {
		enter: styles.menuAnimationEnter,
		enterActive: styles.menuAnimationEnterActive, 
		exit: styles.menuAnimationExit,
		exitActive: styles.menuAnimationExitActive
	};

	const items = ['mirrors', 'lenses'];

	const menuItems = items.map((item, index) => {
		return (
			<li key={index}>
				{item}
			</li>
		)
	});

	console.log('ToggleMenu', props.showMenu);
	
	return (
		
			<div className={styles.menuDiv}>
				<button onClick={props.handleClick} className={props.buttonClassNames}>{props.buttonName}</button>				
				{props.showMenu ? (
					<ul className={`${styles.menu} ${styles.showMenu}`}>
						{menuItems}
					</ul>)
					:(
					 <ul className={styles.menu}>
						{menuItems}
					</ul>
				)}				
			</div>
	)
}
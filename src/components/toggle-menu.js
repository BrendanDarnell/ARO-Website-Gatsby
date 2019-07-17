import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './toggle-menu.module.css';

export default function ToggleMenu(props) {
	// const menuAnimation = {
	// 	enter: styles.menuAnimationEnter,
	// 	enterActive: styles.menuAnimationEnterActive, 
	// 	exit: styles.menuAnimationExit,
	// 	exitActive: styles.menuAnimationExitActive
	// };

	const menuItems = props.menuItems;

	const listItems = menuItems.map((item, index) => {
		return (
			<li key={index}>
				{item}
			</li>
		)
	});
	
	return (
		<div className={styles.menuDiv}>
			<button onClick={props.handleClick} className={props.buttonClassNames}>{props.buttonName}</button>				
			{props.showMenu ? (
				<ul className={`${styles.menu} ${styles.showMenu}`}>
					{listItems}
				</ul>)
			:(
				<ul className={styles.menu}>
					{listItems}
				</ul>
			)}				
		</div>
	)
}
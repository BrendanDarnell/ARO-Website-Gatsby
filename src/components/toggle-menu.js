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

	const subMenuItems = props.subMenuItems;

	const listItems = subMenuItems.map((item, index) => {
		return (
			<li key={index} className={styles.subMenuItem}>
				{item}
			</li>
		)
	});
	
	return (
		<div className={styles.menuItemContainer}>
			<button onClick={props.handleClick} id={props.id} className={props.buttonClassNames}>{props.buttonName}</button>				
			{props.showMenu ? (
				<ul className={`${styles.subMenu} ${styles.showSubMenu}`}>
					{listItems}
				</ul>)
			:(
				<ul className={styles.subMenu}>
					{listItems}
				</ul>
			)}				
		</div>
	)
}
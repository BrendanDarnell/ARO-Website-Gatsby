import React from 'react';

import styles from './news-tickers.module.css';

// let news = [ARO NEWS]

export default function NewsTicker(props) {
	return (
		<div className={styles.newsTicker}>
			<ul className={styles.newsList}>
				<li className={styles.newsItem}>ARO News</li>
				<li className={styles.newsItem}>Brendan is awesome</li>
				<li className={styles.newsItem}>ARO Website</li>
				<li className={styles.newsItem}>Thanks for lunch Doug!!!</li>
			</ul>
		</div>
	)
}
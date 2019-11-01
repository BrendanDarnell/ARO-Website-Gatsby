import React from 'react';

import Map from './map.js';
import styles from './footer.module.css';

export default function Footer(props) {
	return(
		<footer className={styles.footer}>
			<h4 className={`${styles.header} ${styles.logo}`}>ARO</h4>
			<p>At Alpine Research Optics our core strength is our ability to produce durable, long life, high damage 
			threshold coatings on tight tolerance substrates, particularly in the  UV.  We support a wide variety of 
			laser applications for leading edge equipment manufacturers in the semiconductor, medical, defense and 
			industrial markets. We are also very proud to have many of the world renowned research universities and 
			national laboratories as long time customers.</p>
			<h4 className={styles.header}>News</h4>
			<p className={styles.newsfeed}>Come See Us at Photonics West! Booth 4244: San Francisco, Ca, Feb 5th-7th, 2019</p>
			<h4 className={styles.header}>Certifications</h4>
			<h4 className={styles.header}>Get In Touch</h4>
			<div className={styles.contact}>
				<address className={styles.address}>
					Alpine Research Optics<br/>
					6810 Winchester Circle<br/>
					Boulder, Co 80301<br/>
					(303) 444-3420
				</address>
				{/*<Map/>*/}
			</div>
			<h5 className={styles.copyright}>&copy; 2019 Alpine Research Optics</h5>
		</footer>
	);
				


}
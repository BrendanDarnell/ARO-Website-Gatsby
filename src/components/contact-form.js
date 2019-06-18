import React from 'react';

import styles from './contact-form.module.css';

console.log(styles.contactFormDiv, styles.contactFormP, styles.contactSubmitButton);

export default function ContactForm(props) {
	return (
		<div className={styles.contactFormDiv}>
				<p className={styles.contactFormP}><i className="far fa-envelope"></i> Contact Our Sales Team</p>
				<form id="contact-form" className={styles.contactForm}>
					<label htmlFor="name" className={styles.label}>Name (required)</label>
					<input type="text" id="name" name="name" className={styles.input}/>

					<label htmlFor="email"  className={styles.label}>Email (required)</label>
					<input type="email" id="email" name="name" className={styles.input}/>
				</form>

				<textarea form="contact-form" className={styles.contactMessage} defaultValue="Enter message here..."></textarea>
				<button type="submit" className={styles.contactSubmitButton}>Submit</button>
		</div>

		)
}
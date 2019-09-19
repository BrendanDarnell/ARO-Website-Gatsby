import React from 'react';
// import VideoCover from 'react-video-cover';

import styles from './video-banner.module.css';
import 'objectFitPolyfill';
// import aroRot from '../../static/aro-rotation.mp4';

// let image = require('../videos/screenshot.png');
// let video = require('../videos/night.mp4');
// let video2 = require('../videos/Rain.mp4');
// import aroRot from '../videos/aro-rotation.mp4';


// <video autoPlay muted loop className="background-video">
				// 	<source src={video} type="video/mp4"/>
				// </video>
let videoOptions = {

}

export default function VideoBanner(props) {
	return (
		<React.Fragment>
			<div className={styles.videoDiv}>
				<video autoPlay muted loop className={styles.backgroundVideo} data-object-fit="cover">
					<source src={props.video} type="video/mp4" onChange={props.handleChange}/>
				</video>
			</div>
		</React.Fragment>
		)
}
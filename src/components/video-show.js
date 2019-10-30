import React from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';		

import styles from './video-show.module.css';
import VideoBanner from './video-banner.js';

import aroRot from '../../static/aro-rotation.mp4';
import night from '../../static/night.mp4';
import rain from '../../static/Rain.mp4';
// import aroRot from '../../static/aro-rotation.mp4';

// const videos = [aroRot,aroRot,aroRot];

let videoAnimation = {
	enter: styles.videoAnimationEnter,
	enterActive: styles.videoAnimationEnterActive, 
	exit: styles.videoAnimationExit,
	exitActive: styles.videoAnimationExitActive
}

let textAnimation = {
	enter: styles.textAnimationEnter,
	enterActive: styles.textAnimationEnterActive, 
	exit: styles.textAnimationExit,
	exitActive: styles.textAnimationExitActive
}

console.log('video animation', videoAnimation)

export default class VideoShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currVideo: 0,
			showText: false
		};
		// this.initVideos = this.initVideos.bind(this);
		this.nextVideo = this.nextVideo.bind(this);
		// this.prevVideo = this.prevVideo.bind(this);
		this.videoTimer = this.videoTimer.bind(this);
		this.showText = this.showText.bind(this);
		this.loadVideo = this.loadVideo.bind(this);
	}

	componentDidMount() {
		// this.initVideos();
		this.videoTimer();
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	componentDidUpdate(prevProps, prevState) {
		// if(prevState.currVideo !== this.state.currVideo) {
		// 	this.loadVideo();
		// }
	}

	// initVideos() {
	// 	let videoArray = this.props.videos.map((video,index) => ({
	// 		src: video,
	// 		showVideo: index === 0 ? true : false,
	// 		showText: false
	// 	}));
	// 	this.setState({videos: videoArray});
	// 	console.log('videos init', this.state.videos);
	// }

	nextVideo() {
		this.setState((state,props) => {
			if(state.currVideo === props.videos.length - 1) {
				return {currVideo: 0};
			}
			return {currVideo: state.currVideo + 1};
		});
		this.videoTimer();		
	}

	videoTimer() {
		if(this.timer) {
			clearInterval(this.timer);
		}	
		this.timer = setTimeout(this.nextVideo, (20*1000));
	}

	showText() {
		let updatedVideos = [...this.state.videos];
		updatedVideos[this.state.currVideo].showText = true;
		this.setState({videos: updatedVideos});
	}

	loadVideo() {
		let video = document.querySelector('video');
		video.load();
		console.log('load video');
	}

	render() {
		
		console.log(this.state.currVideo);
		// let videos;
		// if(this.state.videos) {
		// 	this.state.videos.map((video, index) => {
		// 		return (
		// 			<CSSTransition in={this.state.videos[index].showVideo} key={index} timeout={1000} classNames={videoAnimation}>
		// 				<div>
		// 					<CSSTransition in={this.state.videos[index].showText} key={index} timeout={1000} classNames={textAnimation}>
		// 						<h2 className={styles.header}>{this.props.headings[index]}</h2>
		// 					</CSSTransition>
		// 					<CSSTransition in={this.state.videos[index].showText} key={index} timeout={1000} classNames={textAnimation}>
		// 						<p className={styles.caption}>{this.props.captions[index]}</p>
		// 					</CSSTransition>
		// 					<VideoBanner video={this.state.videos[index].src}/>
		// 				</div>
		// 			</CSSTransition>
		// 		);
		// 	});
		// }

		// return (
		// 	this.state.videos ? (
		// 			<SwitchTransition>
		// 				{videos}
		// 			</SwitchTransition>)
		// 		:(
		// 			<div>Loading</div>
		// 		)
			
		// );
		return (
			this.props.headings.map((heading, index) => {
				return (
					<h2 className={styles.heading} key={heading}>{heading}</h2>
					<p className={styles.caption} key={caption}>{caption}</p>
				)
			})			
			<div className={styles.videoShowContainer}>
				<SwitchTransition>
					<CSSTransition  timeout={5000} classNames={videoAnimation} key={this.state.currVideo} onEntered={()=>console.log('onEnteredCB')}>
						<div>
							<VideoBanner video={this.props.videos[this.state.currVideo]}/>
						</div>	
					</CSSTransition>
				</SwitchTransition>	

			</div>
		);
	}
}
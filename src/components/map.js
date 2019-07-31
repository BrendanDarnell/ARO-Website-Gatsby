import React from 'react';
import GoogleMapReact from 'google-map-react';

import styles from './map.module.css';

export default function Map(props) {
	return (
		<div className={styles.mapContainer}>
			<GoogleMapReact
		        bootstrapURLKeys={{ key: 'AIzaSyCxjph0vM5cmF6Gxg1SEQxvxRHyyEbQuKg'}}
		        defaultCenter={{lat: 40.07, lng: -105.20}}
		        defaultZoom={13}
		        yesIWantToUseGoogleMapApiInternals
  				onGoogleApiLoaded={({ map, maps }) => {
  					const marker = new maps.Marker({
	          			position: {lat: 40.07, lng: -105.20},
	          			map: map,
	         			title: 'ARO'
        			});
  				}}
		    >
		    </GoogleMapReact>
		</div>
		);
}
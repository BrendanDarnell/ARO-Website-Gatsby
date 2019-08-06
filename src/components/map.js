import React from 'react';
import GoogleMapReact from 'google-map-react';

import styles from './map.module.css';

export default function Map(props) {
	return (
		<div className={styles.mapContainer}>
			<GoogleMapReact
		        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_KEY }}
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
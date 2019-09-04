import React from 'react';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

export default function Head(props) {

	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	);
	console.log('metadata', data.site.siteMetadata.title);

	return (
		<Helmet>
			<title>{data.site.siteMetadata.title}</title>
		    <link defer href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap" rel="stylesheet"/>
		    <link defer rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"/>
		</Helmet>
		)
}



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
		</Helmet>
		)
}



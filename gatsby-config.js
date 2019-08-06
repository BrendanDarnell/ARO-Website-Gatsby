/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
console.log('NODE_ENV', process.env.NODE_ENV);


module.exports = {
  plugins: [
	'gatsby-plugin-react-helmet',
  	`gatsby-plugin-transition-link`
  ],
  siteMetadata: {
  	title: 'Alpine Research Optics'
  }
}


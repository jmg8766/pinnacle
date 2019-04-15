module.exports = {
	plugins: [
		{
		  resolve: `gatsby-plugin-manifest`,
			options: {
		  	name: `Pinnacle Construction`,
				short_name: `Pinnacle`,
				start_url: `/`,
				background_color: `white`,
				theme_color:`white`,
				display: `standalone`,
				icon: `src/images/logo.png`,
			}
		},
		`gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
		`gatsby-transformer-sharp`,
	  `gatsby-plugin-styled-components`,
		{
		  resolve: `gatsby-plugin-sharp`,
			options: {
		    useMozJpeg: true,
				stripMetadata: true,
				defaultQuality: 50,
			},
		},
		{
		  resolve: `gatsby-source-filesystem`,
			options: {
		    name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			}
		},
	]
}

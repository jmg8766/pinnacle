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
				omitGoogleFont: true,
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Quattrocento Sans`,
						subsets: [`latin-ext`, `latin`],
            variants: [`400`, `400i`, `700`],
					},
					{
						family: `Work Sans`,
						subsets: [`latin-ext`, `latin`],
            variants: [`600`],
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-137251873-2`,
			}
		}
	]
}

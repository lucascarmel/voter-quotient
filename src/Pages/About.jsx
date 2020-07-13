import React from 'react'
import { Box, Markdown } from 'grommet'
import { Router } from '@reach/router'

export default About = () => {
	return (
		<Router>
			<ResponsiveContext.Consumer>
				{(size) => (
					<Box path='about'>
						<Markdown>Hello *bob* _man_!</Markdown>
					</Box>
				)}
			</ResponsiveContext.Consumer>
		</Router>
	)
}

import React from 'react'
import { Box, Text, Anchor, Clock } from 'grommet'
import { Facebook, Twitter, Instagram } from 'grommet-icons'
import Countdown from './Countdown'

export default () => {
	return (
		<Box align='center'>
			<Text>Your Election is Soon!</Text>
			<Clock type='digital' />
			<Countdown timeTillDate='12 03 2015' timeFormat='MM DD YYYY' />
			<Box direction='row' pad='xsmall'>
				<Anchor icon={<Facebook />} hoverIndicator />
				<Anchor icon={<Twitter />} hoverIndicator />
				<Anchor icon={<Instagram />} hoverIndicator />
			</Box>
		</Box>
	)
}

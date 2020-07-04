import React from 'react'
import { Nav, Anchor } from 'grommet'
import { Facebook, Twitter, Instagram } from 'grommet-icons'

const navDiv = () => {
	return (
		<Nav direction='row' pad='xsmall'>
			<Anchor icon={<Facebook />} hoverIndicator />
			<Anchor icon={<Twitter />} hoverIndicator />
			<Anchor icon={<Instagram />} hoverIndicator />
		</Nav>
	)
}

export default navDiv

import React from 'react'
import voteLogo from '../Icons/v4a_head-1.jpg'
import colanderLogo from '../Icons/tinhat_america.png'
import { Footer, Box, Text, Avatar, Anchor } from 'grommet'
// import { Router, Link } from '@reach/router'

const FooterDiv = () => {
	return (
		<Footer
			pad='small'
			justify='between'
			border='top'
			background={{ dark: 'black', light: 'white' }}>
			<Box>
				<Anchor href='/' style={{ fontSize: '1.2em', lineHeight: '1.3em' }}>
					Home
				</Anchor>
				<Anchor
					href='about'
					style={{ fontSize: '1.2em', lineHeight: '1.3em', fontWeight: 400 }}>
					About
				</Anchor>
				<Anchor
					href='methods'
					style={{ fontSize: '1.2em', lineHeight: '1.3em', fontWeight: 400 }}>
					Methods
				</Anchor>
				<Anchor
					href='contact'
					style={{ fontSize: '1.2em', lineHeight: '1.3em', fontWeight: 400 }}>
					Contact
				</Anchor>
			</Box>
			<Box direction='row' align='center' gap='small'>
				<Text>A collaboration of</Text>
				<Avatar src={voteLogo} size='50px' alt='Vote For Astra' />
				<Text>and</Text>
				<Avatar src={colanderLogo} size='45px' alt='Colander World' />
			</Box>
		</Footer>
	)
}
export default FooterDiv

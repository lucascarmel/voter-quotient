import React from 'react'
import voteLogo from '../Icons/v4a_head-1.jpg'
import colanderLogo from '../Icons/tinhat_america.png'
import { Footer, Box, Text, Avatar, Anchor } from 'grommet'

const FooterDiv = () => {
	return (
		<Footer
			pad='small'
			justify='between'
			border='top'
			background={{ dark: 'black', light: 'white' }}>
			<Box>
				<Anchor to='/' style={{ fontSize: '1em', lineHeight: '1.3em' }}>
					Home
				</Anchor>
				<Anchor to='/' style={{ fontSize: '1em', lineHeight: '1.3em' }}>
					About
				</Anchor>
				<Anchor to='/' style={{ fontSize: '1em', lineHeight: '1.3em' }}>
					Methods
				</Anchor>
				<Anchor to='/' style={{ fontSize: '1em', lineHeight: '1.3em' }}>
					Contact
				</Anchor>
			</Box>
			<Box direction='row' align='center' gap='small'>
				<Text>A collaboration of</Text>
				<Avatar src={voteLogo} size='50px' alt='Vote For Astra' />
				<Text>and</Text>
				<Avatar src={colanderLogo} size='47px' alt='Colander World' />
			</Box>
		</Footer>
	)
}
export default FooterDiv

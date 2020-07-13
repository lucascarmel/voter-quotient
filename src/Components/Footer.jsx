import React from 'react'
// import voteLogo from '../Icons/v4a_head-1.jpg'
import voteLogoColor from '../Icons/v4a_head-1_Color.png'
import colanderLogo from '../Icons/tinhat_america.png'
import { Footer, Box, Avatar, Anchor, ResponsiveContext, Button } from 'grommet'
// import { Router, Link } from '@reach/router'

const FooterDiv = () => {
	return (
		<ResponsiveContext.Consumer>
			{(size) => (
				<Footer
					pad='small'
					justify='between'
					border='top'
					background={{ dark: 'black', light: 'white' }}>
					<Box>
						<Anchor
							href='/'
							color='Black'
							style={{ fontSize: '1.2em', lineHeight: '1.3em' }}>
							Home
						</Anchor>
						<Anchor
							href='about'
							color='Black'
							style={{
								fontSize: '1.2em',
								lineHeight: '1.3em',
								fontWeight: 400,
							}}>
							About
						</Anchor>
						<Anchor
							href='methods'
							color='Black'
							style={{
								fontSize: '1.3em',
								lineHeight: '1.3em',
								fontWeight: 400,
							}}>
							Methods
						</Anchor>
						<Anchor
							href='contact'
							color='Black'
							style={{
								fontSize: '1.3em',
								lineHeight: '1.3em',
								fontWeight: 400,
							}}>
							Contact
						</Anchor>
					</Box>
					<Box direction={size === 'small' && 'column'} gap='small'>
						<Button
							size={size === 'small' ? 'medium' : 'large'}
							label='Survey'></Button>
						<Button
							primary
							size={size === 'small' ? 'medium' : 'large'}
							label='Donate'></Button>
					</Box>
					<Box direction='column' align='center' gap='small'>
						<Box
							direction={size === 'small' && 'column'}
							align='center'
							gap='small'>
							<Avatar
								src={voteLogoColor}
								size={size === 'small' ? '40px' : '55px'}
								alt='Vote For Astra'
							/>
							<Avatar
								src={colanderLogo}
								size={size === 'small' ? '40px' : '55px'}
								alt='Colander World'
							/>
						</Box>
					</Box>
				</Footer>
			)}
		</ResponsiveContext.Consumer>
	)
}
export default FooterDiv

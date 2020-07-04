import React from 'react'
import voteLogo from '../Icons/v4a_head-1.jpg'
import colanderLogo from '../Icons/tinhat_america.png'
import { Footer } from 'grommet'

const FooterDiv = () => {
	return (
		<Footer
			pad='xsmall'
			justify='center'
			border='top'
			background={{ dark: 'black', light: 'white' }}>
			<p>A collaboration of</p>
			<img src={voteLogo} alt='Vote For Astra' width='45' />
			<p>and</p>
			<img src={colanderLogo} alt='Colander World' width='42' />
		</Footer>
	)
}
export default FooterDiv

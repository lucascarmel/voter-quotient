import React from 'react'
import styled from 'styled-components'
import voteLogo from './v4a_head-1_Color.png'
import colanderLogo from './tinhat_america.png'

const FooterDiv = styled.div`
	display: flexbox;
	padding: 1rem;
	justify-content: center;
	height: 50px;
	margin-top: -50px;
	flex-shrink: 0;
`
const FooterImage = styled.img`
	margin: 0 0.5rem;
`

const FooterText = styled.p`
	font-size: 1.2em;
	margin: 0.76em 0;
`

class Footer extends React.Component {
	render() {
		return (
			<FooterDiv>
				<FooterText>A collaboration of</FooterText>
				<FooterImage src={voteLogo} alt='Vote For Astra' width='45' />
				<FooterText>and</FooterText>
				<FooterImage src={colanderLogo} alt='Colander World' width='42' />
			</FooterDiv>
		)
	}
}
export default Footer

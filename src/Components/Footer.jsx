import React from 'react'
import styled from 'styled-components'
import voteLogo from '../Icons/v4a_head-1.jpg'
import colanderLogo from '../Icons/tinhat_america.png'

// const FooterDiv = styled.div`
// 	display: flexbox;
// 	padding: 1rem;
// 	position: fixed;
// 	bottom: 0;
// 	left: 50%;
// 	/* bring your own prefixes */
// 	transform: translate(-50%);
// `
// const FooterImage = styled.img`
// 	margin: 0 0.5rem;
// `

// const FooterText = styled.p`
// 	font-size: 1.2em;
// 	margin: 0.76em 0;
// `

const Footer = () => {
	return (
		<div>
			<p>A collaboration of</p>
			<img src={voteLogo} alt='Vote For Astra' width='45' />
			<p>and</p>
			<img src={colanderLogo} alt='Colander World' width='42' />
		</div>
	)
}
export default Footer

import React from 'react'
import styled from 'styled-components'

// import Header from './Header.js'
import PlacesAutocomplete from './AddressInput.js'
import Lookup from './AddressLookup.js'
import Footer from './Footer.js'

const Quote = styled.p`
	font-size: 1.6em;
	font-family: 'Spectral', Georgia, 'Times New Roman', Times, serif serif;
	line-height: 1.2em;
`

const Heading = styled.h1`
	font-size: 4.5em;
	line-height: 0.9em;
	font-family: 'IBM Plex Mono', 'Rubik', Helvetica, Arial, sans-serif;
	margin: 2rem 0;
	font-style: italic;
`

const DivOuter = styled.div`
	display: inline-flex;
	margin: 1em 0;
`

const DivInner = styled.div`
	display: inline-flex;
	flex-direction: row;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`

class App extends React.Component {
	render() {
		return (
			<body>
				<div className='App'>
					<main>
						<DivOuter>
							<Heading>
								Voter
								<br />
								Quotient
							</Heading>
						</DivOuter>
						<Quote>
							Casting your vote shouldn't feel like buying a lottery ticket.
							<i>VQ</i> is a ballot guide with the best information and honest
							opinions.
						</Quote>
						<DivInner>
							{/* <Lookup />
							<strong>&nbsp;&nbsp;or&nbsp;&nbsp;</strong> */}
							<PlacesAutocomplete />
						</DivInner>
					</main>
				</div>
				<Footer />
			</body>
		)
	}
}

export default App

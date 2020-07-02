import React from 'react'
import styled from 'styled-components'

import PlacesAutocomplete from '../Hooks/usePlacesAutocomplete.jsx'
// import Lookup from './Components/AddressLookup.js'
// import Table from './Components/AddressInput.js'
import Footer from '../Components/Footer.jsx'

const Quote = styled.p`
	font-size: 1.6em;
	font-family: 'Spectral', Georgia, 'Times New Roman', Times, serif serif;
	line-height: 1.2em;
`

const Heading = styled.h1`
	font-size: 6em;
	line-height: 0.9em;
	font-family: 'IBM Plex Mono', 'Rubik', Helvetica, Arial, sans-serif;
	/* margin: 2rem 0; */
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

const App = () => {
	return (
		<div>
			<div className='App'>
				<main>
					<DivOuter>
						<Heading>Vote-4-Change</Heading>
					</DivOuter>
					<Quote>
						Gridlock doesn't happen by accident. <br />
						Change doesn't happen without a fight. <br />
						<br />
						<i>Vote-4-Change</i> is a criminal justice ballot guide that holds
						politicians accountable.
					</Quote>
					<DivInner>
						{/* <Lookup />
						<strong>&nbsp;&nbsp;or&nbsp;&nbsp;</strong> */}
						<PlacesAutocomplete />
					</DivInner>
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default App

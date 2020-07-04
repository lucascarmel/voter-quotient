import React from 'react'
import styled from 'styled-components'
// import PlacesAutocomplete from '../Hooks/usePlacesAutocomplete.jsx'
// import Lookup from './Components/AddressLookup.js'
// import Table from './Components/AddressInput.js'
import FooterDiv from '../Components/Footer.jsx'
import HeaderDiv from '../Components/Header.jsx'
import SocialDiv from '../Components/Social.jsx'

import Demo from '../Components/Demo.jsx'
import {
	Grommet,
	Box,
	ResponsiveContext,
	Main,
	// Layer,
} from 'grommet'
import VoteTheme from '../Utils/voteTheme.json'

const Heading = styled.h1`
	font-size: 6em;
	line-height: 0.9em;
	font-family: 'IBM Plex Mono', 'Rubik', Helvetica, Arial, sans-serif;
	/* margin: 2rem 0; */
	font-style: italic;
`
const theme = {
	global: {
		// colors: {
		// 	brand: '#228BE6',
		// },
		font: {
			family: 'IBM Plex Mono',
			size: '14px',
			height: '20px',
		},
	},
	accordion: {
		icons: { color: { dark: 'blue', light: 'red' } },
		// panel: { border: 'dashed' },
	},
}

const App = () => {
	// const [showSidebar, setShowSidebar] = useState(false)

	return (
		<Grommet theme={VoteTheme} full themeMode='light'>
			<ResponsiveContext.Consumer>
				{(size) => (
					<Main fill>
						<HeaderDiv />
						<Box direction='column' flex overflow={{ horizontal: 'hidden' }}>
							<Box flex align='center' justify='top'>
								<Heading>Know Your Vote</Heading>
								<SocialDiv />
								<Demo />
								{/* <Lookup />
						<PlacesAutocomplete /> */}
							</Box>
							<FooterDiv />
						</Box>
					</Main>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
	)
}

export default App

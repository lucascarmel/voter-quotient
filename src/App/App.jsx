import React, { useState } from 'react'
import FooterDiv from '../Components/Footer'
import AddressInput from '../Components/AddressInput'
// import HeaderDiv from '../Components/Header'
// import SocialDiv from '../Components/Social'
import { Response } from '../Components/Response'

import {
	Grommet,
	Box,
	ResponsiveContext,
	Main,
	Heading,
	// Layer,
} from 'grommet'
import { DummyData } from '../Components/DummyData'

// import VoteTheme from '../Utils/voteTheme.json'

const theme = {
	global: {
		colors: {
			brand: 'Black',
		},
		font: {
			family: 'Helvetica',
			size: '14px',
			height: '16px',
		},
	},
	accordion: {
		icons: {
			collapse: null,
			expand: null,
		},
		heading: {
			margin: 'small',
		},
		border: {
			side: 'top',
		},
	},
	Heading: {
		font: {
			family: 'IBM Plex Mono',
			size: '14px',
			height: '20px',
		},
	},
	Paragraph: {
		font: {
			family: 'Helvetica',
		},
	},
}

const App = () => {
	// const [showSidebar, setShowSidebar] = useState(false)

	return (
		<Grommet theme={theme} full themeMode='light'>
			<ResponsiveContext.Consumer>
				{(size) => (
					<Main fill={true}>
						{/* <HeaderDiv /> */}
						<Box
							direction='column'
							flex='grow'
							overflow={{ horizontal: 'hidden' }}
							align='center'
							justify='start'>
							<Heading>
								<AddressInput />
							</Heading>
							<Response data={DummyData} />
							{/* <Lookup /> */}
							{/* <PlacesAutocomplete /> */}
							{/* <SocialDiv /> */}
						</Box>
						<FooterDiv />
					</Main>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
	)
}

export default App

import React from 'react'
import FooterDiv from '../Components/Footer.jsx'
import HeaderDiv from '../Components/Header.jsx'
import SocialDiv from '../Components/Social.jsx'
import AccordianDiv from '../Components/Accordian.jsx'
import {
	Grommet,
	Box,
	ResponsiveContext,
	Main,
	Heading,
	// Layer,
} from 'grommet'

// import VoteTheme from '../Utils/voteTheme.json'

const theme = {
	global: {
		colors: {
			brand: 'Orange',
		},
		font: {
			family: 'Helvetica',
			size: '14px',
			height: '16px',
		},
	},
	accordion: {
		icons: { color: { dark: 'blue', light: 'orange' } },
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
						<HeaderDiv />
						<Box
							direction='column'
							flex='grow'
							overflow={{ horizontal: 'hidden' }}
							flex
							align='center'
							justify='top'>
							<Heading>Know Your Vote</Heading>
							<AccordianDiv />
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

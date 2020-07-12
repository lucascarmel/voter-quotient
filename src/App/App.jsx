import React, { useContext } from 'react'
import FooterDiv from '../Components/Footer'
import AddressInput from '../Components/AddressInput'
import { Response } from '../Components/Response'
import { ballotReadyKeyLudo } from '../Utils/apiKeys'
import Header from '../Components/Header'
import { Grommet, Box, ResponsiveContext, Main, Heading, Button } from 'grommet'
import { Location } from 'grommet-icons'
import { DummyData } from '../Components/DummyData'
import { Context } from '../Contexts/LatLng'

// import useBallotReady from '../Hooks/useBallotReady'
// import HeaderDiv from '../Components/Header'
// import TakeAction from '../Components/TakeAction'
// import VoteTheme from '../Utils/voteTheme.json'
import secondTheme from '../Utils/secondTheme.json'

const App = () => {
	// const [showSidebar, setShowSidebar] = useState(false)
	const { latlng } = useContext(Context)

	console.log('Lat: ' + latlng.lat, 'Lon: ' + latlng.lng)
	fetch(
		`https://api.civicengine.com/positions?lat=${latlng.lat}&lon=${latlng.lng}&include_candidates=1&include_endorsements=1&include_office_holders=1&include_volunteer_urls=1`,
		{
			headers: { 'x-api-key': ballotReadyKeyLudo },
		}
	)
		.then((res) => res.json())
		.then((txt) => console.log(txt))

	return (
		<Grommet theme={secondTheme} full themeMode='light'>
			<ResponsiveContext.Consumer>
				{(size) => (
					<Main fill={true}>
						<Header />
						<Box
							direction='column'
							flex='grow'
							overflow={{ horizontal: 'hidden' }}
							align='center'
							justify='start'>
							<Heading>
								{size === 'small' ? (
									<Button
										primary
										label='Use Current Location'
										icon={<Location />}
									/>
								) : (
									<AddressInput />
								)}
							</Heading>
							<Response data={DummyData} />
							{/* {useBallotReady(latlng.lng, latlng.lng)} */}
							{/* <TakeAction /> */}
						</Box>
						<FooterDiv />
					</Main>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
	)
}

export default App

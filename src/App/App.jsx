import React, { useContext } from 'react'
import FooterDiv from '../Components/Footer'
import AddressInput from '../Components/AddressInput'
import Response from '../Components/Response'
import Header from '../Components/Header'
import { Grommet, Box, ResponsiveContext, Main, Heading, Button } from 'grommet'
import { Location } from 'grommet-icons'
import { Context } from '../Contexts/LatLng'
import secondTheme from '../Utils/secondTheme.json'
import { Router } from '@reach/router'

// import { DummyData } from '../Components/DummyData'

const App = () => {
	const { latlng } = useContext(Context)
	return (
		<Grommet theme={secondTheme} full themeMode='light'>
			<ResponsiveContext.Consumer>
				{(size) => (
					<Main fill={true}>
						<Box
							direction='column'
							flex='grow'
							overflow={{ horizontal: 'hidden' }}
							align='center'>
							<Heading
								style={{
									fontFamily: 'IBM Plex Mono',
									fontStyle: 'italic',
									fontSize: '6em',
									lineHeight: '1em',
									letterSpacing: '-2px',
								}}>
								Know Your Vote
							</Heading>
							<Router>
								{size === 'small' ? (
									<Button
										path='/'
										primary
										label='Use Current Location'
										icon={<Location />}
									/>
								) : (
									<AddressInput path='/' />
								)}
								<Response lat={latlng.lat} lng={latlng.lng} path='lookup' />
							</Router>
						</Box>
						<FooterDiv />
					</Main>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
	)
}

export default App

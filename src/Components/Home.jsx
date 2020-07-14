import React, { useContext } from 'react'
import { Box, Heading, Button, ResponsiveContext } from 'grommet'
import AddressInput from '../Components/AddressInput'
import { Response } from '../Components/Response'
import LocationInput from '../Components/LocationInput'

import { Context } from '../Contexts/LatLng'
import { Router } from '@reach/router'

const Home = () => {
	const { latlng } = useContext(Context)
	return (
		<ResponsiveContext.Consumer>
			{(size) => (
				<Box
					direction='column'
					flex='grow'
					fill={size === 'small' && 'vertical'}
					overflow={{ horizontal: 'hidden' }}
					align='center'>
					<Heading
						responsive={true}
						textAlign='center'
						style={{
							fontFamily: 'IBM Plex Mono',
							fontStyle: 'italic',
							fontSize: '6em',
							lineHeight: '1em',
							letterSpacing: '-2px',
						}}>
						Dont Wait{' '}
						<span style={{ display: size === 'small' && 'none' }}>—</span> Vote
					</Heading>
					<Router>
						{size === 'small' ? (
							<LocationInput path='/' />
						) : (
							<AddressInput path='/' />
						)}
						<Response lat={latlng.lat} lng={latlng.lng} path='lookup' />
					</Router>
				</Box>
			)}
		</ResponsiveContext.Consumer>
	)
}

export default Home

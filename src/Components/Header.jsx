import React, { useContext } from 'react'
import { Header } from 'grommet'
import AddressInput from '../Components/AddressInput.jsx'
// import {  } from 'grommet-icons'

import { Context } from '../Contexts/LatLng'

const HeaderDiv = () => {
	const { latlng } = useContext(Context)

	return (
		<Header
			pad='small'
			justify='left'
			border='bottom'
			background={{ dark: 'black', light: 'white' }}>
			<b>Your Address:</b>
			<AddressInput />
			<div>
				lat: {latlng.lat} lng: {latlng.lng}
			</div>
		</Header>
	)
}
export default HeaderDiv

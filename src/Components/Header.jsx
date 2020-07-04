import React, { useContext } from 'react'
import { Header, Layer } from 'grommet'
import AddressInput from '../Components/AddressInput.jsx'
import { Sun } from 'grommet-icons'

import { Context } from '../Contexts/LatLng';

const HeaderDiv = () => {
	const { latlng } = useContext(Context);

	return (
		<Header
			pad='xsmall'
			justify='left'
			border='bottom'
			background={{ dark: 'black', light: 'white' }}>
			<b>Your Address:</b>
			<AddressInput />
			<div>lat: {latlng.lat} lng: {latlng.lng}</div>
			{/* <Moon />
			<Sun /> */}
		</Header>
	)
}
export default HeaderDiv

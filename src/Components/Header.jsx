import React from 'react'
import { Header, Layer } from 'grommet'
import AddressInput from '../Components/AddressInput.jsx'
import { Sun } from 'grommet-icons'

const HeaderDiv = () => {
	return (
		<Header
			pad='xsmall'
			justify='left'
			border='bottom'
			background={{ dark: 'black', light: 'white' }}>
			<b>Your Address:</b>
			<AddressInput />
			{/* <Moon />
			<Sun /> */}
		</Header>
	)
}
export default HeaderDiv

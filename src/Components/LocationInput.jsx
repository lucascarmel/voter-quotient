import React, { useContext } from 'react'
import { usePosition } from 'use-position'
import { Button } from 'grommet'
import { Location } from 'grommet-icons'
import { Context } from '../Contexts/LatLng'

export default () => {
	const { setLatlng } = useContext(Context)

	const { latitude, longitude, error } = usePosition({
		enableHighAccuracy: true,
	})

	return (
		<Button
			primary
			size='large'
			label='Find My Ballot'
			icon={<Location />}
			onClick={() => {
				!error && console.log(`📍${latitude}, ${longitude}`)
				setLatlng({ latitude, longitude })
			}}
		/>
	)
}

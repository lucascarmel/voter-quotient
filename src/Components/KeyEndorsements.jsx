import React from 'react'
import { Box, Avatar } from 'grommet'

const KeyEndorsementsDiv = ({ length }) => {
	console.log(length)
	const EmptyArray = new Array(length)
	console.log(EmptyArray)
	return (
		<Box direction='row' wrap={true} margin={{ left: '-2px' }}>
			<Avatar
				size='32px'
				background='purple'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='32px'
				background='purple'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='32px'
				background='purple'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='32px'
				background='purple'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
		</Box>
	)
}

export default KeyEndorsementsDiv

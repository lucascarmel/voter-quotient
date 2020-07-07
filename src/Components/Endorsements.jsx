import React from 'react'
import { Box, Avatar } from 'grommet'

const EndorsementsDiv = ({ length }) => {
	console.log(length)
	const EmptyArray = new Array(length)
	console.log(EmptyArray)
	EmptyArray.map(
		(d) =>
			(d = (
				<Avatar
					size='small'
					background='orange'
					border={true}
					margin={{ horizontal: '2px', vertical: '1px' }}
				/>
			))
	)
	console.log(EmptyArray)

	return (
		<Box direction='row' wrap={true} margin={{ left: '-2px' }}>
			{EmptyArray}
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
			<Avatar
				size='small'
				background='orange'
				border={true}
				margin={{ horizontal: '2px', vertical: '1px' }}
			/>
		</Box>
	)
}

export default EndorsementsDiv

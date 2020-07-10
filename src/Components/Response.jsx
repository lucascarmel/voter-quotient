import React from 'react'
import { Accordion } from 'grommet'
import { Position } from './Positions'

export const Response = ({ data }) => {
	const sortedPositions = data.map(
		({
			positionName,
			positionDescription,
			division,
			divisionColor,
			voteMargin,
			candidateArray,
		}) => (
			<Position
				key={positionName}
				positionName={positionName}
				positionDescription={positionDescription}
				division={division}
				divisionColor={divisionColor}
				voteMargin={voteMargin}
				candidatesArray={candidateArray}
			/>
		)
	)
	return (
		<Accordion multiple={true} width='large' margin='xsmall' animate={true}>
			{sortedPositions}
		</Accordion>
	)
}

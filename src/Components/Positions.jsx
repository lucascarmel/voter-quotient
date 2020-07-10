import React from 'react'
import { AccordionPanel, Box, Text, ResponsiveContext } from 'grommet'
import { Candidate } from './Candidates'
import Tag from '../Utils/Tag'

export const Position = ({
	positionName,
	positionDescription,
	division,
	divisionColor,
	voteMargin,
	candidatesArray,
}) => {
	const SortedCandidates = candidatesArray
		.sort((d) => d.occupation === 'Incumbent')
		.map(
			({
				candidateName,
				candidateParty,
				candidatePhoto,
				candidateOccupation,
				candidateTenure,
				endorsements,
			}) => (
				<Candidate
					key={candidateName}
					name={candidateName}
					party={candidateParty}
					photo={candidatePhoto}
					occupation={candidateOccupation}
					tenure={candidateTenure}
					keyEndorsements={endorsements}
					otherEndorsements={endorsements}
				/>
			)
		)
	return (
		<ResponsiveContext.Consumer>
			{(size) => (
				<AccordionPanel
					pad={{ top: 'small', bottom: '2px' }}
					label={
						<Box
							margin={size === 'small' ? { horizontal: 'small' } : null}
							direction='row'
							gap='xsmall'
							justify='between'
							align='baseline'
							flex='grow'>
							<Text style={{ fontSize: '1.6em' }}>
								<b>{positionName}</b>
							</Text>
							<Box direction='row' align='baseline'>
								<Tag color={divisionColor}>{division}</Tag>
								<Text style={{ fontFamily: 'IBM Plex Mono', fontSize: '1em' }}>
									&nbsp;{voteMargin}
								</Text>
							</Box>
						</Box>
					}>
					<Box
						direction={size === 'small' ? 'column' : 'row'}
						pad={{ vertical: 'xsmall' }}>
						{SortedCandidates}
					</Box>
					<Box basis='full' pad='xsmall' margin={{ bottom: '1em' }}>
						{positionDescription}
					</Box>
				</AccordionPanel>
			)}
		</ResponsiveContext.Consumer>
	)
}

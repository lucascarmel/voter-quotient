import React from 'react'
import { AccordionPanel, Box, Avatar, Text, Paragraph } from 'grommet'
import EndorsementsDiv from './Endorsements'
import KeyEndorsementsDiv from './KeyEndorsements'
import Tag from '../Utils/Tag'

const AccordianPanelDiv = ({
	positionName,
	positionDescription,
	division,
	divisionColor,
	voteMargin,
	candidateOneName,
	candidateOneParty,
	candidateOnePhoto,
	candidateOneOccupation,
	candidateOneTenure,
	candidateOneKeyEndorsements,
	candidateOneEndorsements,
	candidateTwoName,
	candidateTwoParty,
	candidateTwoPhoto,
	candidateTwoOccupation,
	candidateTwoTenure,
	candidateTwoKeyEndorsements,
	candidateTwoEndorsements,
}) => {
	return (
		<AccordionPanel
			pad={{ top: 'small', bottom: '2px' }}
			label={
				<Box
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
			{/* margin={{ horizontal: `${size === 'small' ? '4px' : null}` }}> */}
			<Box direction='row' pad={{ vertical: 'xsmall' }}>
				<Box basis='1/2' alignSelf='start' pad='xsmall'>
					<Box align='center' direction='row' gap='small'>
						<Avatar
							src={candidateOnePhoto}
							border={{ color: 'red', size: 'small' }}
						/>
						<Text>{candidateOneName}</Text>
					</Box>
					<Paragraph>
						<b>{candidateOneOccupation}</b> of <b>{candidateOneTenure}</b>{' '}
						years.
					</Paragraph>
					<Text style={{ fontFamily: 'IBM Plex Mono', fontSize: '1em' }}>
						<b>Key Endorsements</b>
					</Text>
					<KeyEndorsementsDiv length={candidateOneKeyEndorsements} />
					<Text
						style={{ fontFamily: 'IBM Plex Mono', fontSize: '1em' }}
						margin={{ top: 'medium' }}>
						<b>All Endorsements</b>
					</Text>
					<EndorsementsDiv length={candidateOneEndorsements} />
				</Box>
				<Box basis='1/2' alignSelf='start' pad='xsmall'>
					<Box align='center' direction='row' gap='small'>
						<Avatar
							src={candidateTwoPhoto}
							border={{ color: 'blue', size: 'small' }}
						/>
						<Text>{candidateTwoName}</Text>
					</Box>
					<Paragraph>
						<b>{candidateTwoOccupation}</b> of <b>{candidateTwoTenure}</b>{' '}
						years.
					</Paragraph>
					<Text style={{ fontFamily: 'IBM Plex Mono', fontSize: '1em' }}>
						<b>Key Endorsements</b>
					</Text>
					<KeyEndorsementsDiv length={candidateTwoKeyEndorsements} />
					<Text
						style={{ fontFamily: 'IBM Plex Mono', fontSize: '1em' }}
						margin={{ top: 'medium' }}>
						<b>All Endorsements</b>
					</Text>
					<EndorsementsDiv length={candidateTwoEndorsements} />
				</Box>
			</Box>
			<Box basis='full' pad='xsmall' margin={{ bottom: '1em' }}>
				{positionDescription}
			</Box>
		</AccordionPanel>
	)
}

export default AccordianPanelDiv

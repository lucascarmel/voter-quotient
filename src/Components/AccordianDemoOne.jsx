import React from 'react'
import { AccordionPanel, Box, Avatar, Text, Paragraph } from 'grommet'
import EliPlay from '../Icons/eli-fun.jpg'
import EliWork from '../Icons/eli-serious.jpg'
import EndorsementsDiv from './Endorsements'
import Tag from '../Utils/Tag'

const AccordianPanelOne = () => {
	return (
		<AccordionPanel
			pad={{ top: 'small', bottom: 'xsmall' }}
			label={
				<Box
					direction='row'
					gap='xsmall'
					justify='between'
					align='baseline'
					flex='grow'>
					<Text style={{ fontSize: '1.6em' }}>
						<b>Attorney General</b>
					</Text>
					<Box direction='row' align='baseline'>
						<Tag color='red'>Alabama</Tag>
						<Text style={{ fontFamily: 'IBM Plex Mono', fontSize: '1em' }}>
							&nbsp;57,267 votes
						</Text>
					</Box>
				</Box>
			}>
			{/* margin={{ horizontal: `${size === 'small' ? '4px' : null}` }}> */}
			<Box direction='row' pad={{ vertical: 'xsmall' }}>
				<Box basis='1/2' alignSelf='start' pad='xsmall'>
					<Box align='center' direction='row' gap='small'>
						<Avatar src={EliWork} border={{ color: 'red', size: 'small' }} />
						<Text>Rebecca Scibona</Text>
					</Box>
					<Paragraph>
						Scibona is the <b>incumbent</b> of <b>15</b> years.
					</Paragraph>
					<EndorsementsDiv />
				</Box>
				<Box basis='1/2' alignSelf='start' pad='xsmall'>
					<Box align='center' direction='row' gap='small'>
						<Avatar src={EliPlay} border={{ color: 'blue', size: 'small' }} />
						<Text>Charles C. Flaugherty</Text>
					</Box>
					<Paragraph>
						{/* Put latest experience, always incumbent, and length of time held */}
						Flaugherty is a <b>trial lawyer</b> of <b>6</b> years.
					</Paragraph>
				</Box>
			</Box>
			<Box basis='full' pad='xsmall' margin={{ bottom: '1em' }}>
				The Attorney General of the State of Colorado is the chief legal officer
				for the state of Colorado and the head of the Colorado Department of
				Law, a principal department of the Colorado state government. It is an
				elected position with a four-year term, and follows the same schedule as
				election of the governor.
			</Box>
		</AccordionPanel>
	)
}

export default AccordianPanelOne

import React from 'react'
import { AccordionPanel, Box, Avatar, Text, Paragraph } from 'grommet'
import EliPlay from '../Icons/eli-fun.jpg'
import EliWork from '../Icons/eli-serious.jpg'
import EndorsementsDiv from './Endorsements'
import Tag from '../Utils/Tag'

const AccordianPanelTwo = () => {
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
						<b>Governor</b>
					</Text>
					<Box direction='row' align='baseline'>
						<Tag color='red'>Alabama</Tag>
						<Text style={{ fontFamily: 'IBM Plex Mono', fontSize: '1em' }}>
							&nbsp;40,583 votes
						</Text>
					</Box>
				</Box>
			}>
			{/* margin={{ horizontal: `${size === 'small' ? '4px' : null}` }}> */}
			<Box direction='row' pad='xsmall'>
				<Box basis='1/2' alignSelf='start' pad='xsmall'>
					<Box align='center' direction='row' gap='small'>
						<Avatar src={EliWork} border={{ color: 'red', size: 'small' }} />
						<Text>Steve Marshall</Text>
					</Box>
					<Paragraph>
						Steve Marshall is a <b>certified jerk</b> of <b>65</b> years.
					</Paragraph>
					<EndorsementsDiv />
				</Box>
				<Box basis='1/2' alignSelf='start' pad='xsmall'>
					<Box align='center' direction='row' gap='small'>
						<Avatar src={EliPlay} border={{ color: 'blue', size: 'small' }} />
						<Text>Bob Vance</Text>
					</Box>
					<Paragraph>
						{/* Put latest experience, always incumbent, and length of time held */}
						Bob Vance is a <b>good lawyer</b> of <b>23</b> years.
					</Paragraph>
				</Box>
			</Box>
			<Box basis='full' pad='xsmall' margin={{ bottom: '1em' }}>
				Alabama Governor is one of those positions that just makes you say, whoa
				the time is ticking. I mean who in their right mind takes a piece of
				bacon from the kitchen to the garage in less than 12 minutes. It's a
				wonder Alabama has had a governor for this look. The position is
				ludacris. If only Ludacris, the rapper, could run. He'd probably do
				about the same as Kanye running for President. Jeez, Elon is supporting
				him. A time.
			</Box>
		</AccordionPanel>
	)
}

export default AccordianPanelTwo

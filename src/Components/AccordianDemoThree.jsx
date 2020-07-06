import React from 'react'
import { AccordionPanel, Box, Avatar, Text, Paragraph } from 'grommet'
import EliPlay from '../Icons/eli-fun.jpg'
import EliWork from '../Icons/eli-serious.jpg'
import EndorsementsDiv from './Endorsements'
import Tag from '../Utils/Tag'

const AccordianPanelThree = () => {
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
						<b>Public Defender</b>
					</Text>
					<Box direction='row' align='baseline'>
						<Tag color='green'>Jefferson County</Tag>
						<Text style={{ fontFamily: 'IBM Plex Mono', fontSize: '1em' }}>
							&nbsp;12,303 votes
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
				Alabama Attorney General is a great position for people who really want
				to make a difference and do other cool things like drink coffee and make
				laws and help people and other things I guess ok. Alabama Attorney
				General is a great position for people who really want to make a
				difference and do other cool things like drink coffee and make laws and
				help people and other things I guess ok.
			</Box>
		</AccordionPanel>
	)
}

export default AccordianPanelThree

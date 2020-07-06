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
						Scibona is the <b>incumbent</b> of <b>40</b> years.
					</Paragraph>
					<EndorsementsDiv />
				</Box>
				<Box basis='1/2' alignSelf='start' pad='xsmall'>
					<Box align='center' direction='row' gap='small'>
						<Avatar src={EliPlay} border={{ color: 'blue', size: 'small' }} />
						<Text>Charles Dingus</Text>
					</Box>
					<Paragraph>
						{/* Put latest experience, always incumbent, and length of time held */}
						Dingus is a <b>trial lawyer</b> of <b>15</b> years.
					</Paragraph>
				</Box>
			</Box>
			<Box basis='full' pad='xsmall' margin={{ bottom: '1em' }}>
				Alabama Attorney General is a great position for people who really want
				to make a difference and do other cool things like drink coffee and make
				laws and help people and other things I guess ok. You can also do things
				like ride your bike and take your mom for a walk, but during the
				Covid-19 pandeimc, you should stay at least six feat away from her while
				you do that!
			</Box>
		</AccordionPanel>
	)
}

export default AccordianPanelOne

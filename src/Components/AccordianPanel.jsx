import React from 'react'
import { AccordionPanel, Box, Avatar, Text, Paragraph } from 'grommet'
import EliPlay from '../Icons/eli-fun.jpg'
import EliWork from '../Icons/eli-serious.jpg'

const AccordianPanelDiv = () => {
	return (
		<AccordionPanel label='Alabama Attorney General'>
			<Box direction='row' pad='small'>
				<Box basis='1/2' alignSelf='start' pad='xsmall'>
					<Box align='center' direction='row' gap='small'>
						<Avatar src={EliWork} />
						<Text>Steve Marshall</Text>
					</Box>
					<Paragraph>
						Steve Marshall is a <b>certified jerk</b> of <b>65</b> years.
					</Paragraph>
					<Box direction='row'>
						<Avatar hoverIndicator='true' size='small' background='orange' />
						<Avatar size='small' background='orange' />
						<Avatar size='small' background='orange' />
						<Avatar size='small' background='orange' />
						<Avatar size='small' background='orange' />
						<Avatar size='small' background='orange' />
					</Box>
				</Box>
				<Box basis='1/2' alignSelf='start' pad='xsmall'>
					<Box align='center' direction='row' gap='small'>
						<Avatar src={EliPlay} />
						<Text>Bob Vance</Text>
					</Box>
					<Paragraph>
						Bob Vance is a <b>good lawyer</b> of <b>23</b> years.
					</Paragraph>
				</Box>
			</Box>
			<Box basis='full' pad='small'>
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

export default AccordianPanelDiv

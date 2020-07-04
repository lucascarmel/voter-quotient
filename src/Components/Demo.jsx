import React from 'react'
import { Accordion, AccordionPanel, Box, Avatar, Text } from 'grommet'
import EliPlay from '../Icons/eli-fun.jpg'
import EliWork from '../Icons/eli-serious.jpg'

const Demo = () => (
	<Accordion multiple='true' width='xlarge'>
		<AccordionPanel label='Alabama Attorney General'>
			<Box direction='row' pad='medium' full flex>
				<Box flex justify='left' direction='row'>
					<Avatar src={EliWork} />
					<Text>Steve Marshall</Text>
				</Box>
				<Box flex justify='right' direction='row'>
					<Avatar src={EliPlay} />
					<Text>Bob Vance</Text>
				</Box>
			</Box>
		</AccordionPanel>
		<AccordionPanel label='Jefferson County Sheriff'>
			<Box direction='row' pad='medium' full flex>
				<Box flex justify='left' direction='row'>
					<Avatar src={EliWork} />
					<Text>Steve Marshall</Text>
				</Box>
				<Box flex justify='right' direction='row'>
					<Avatar src={EliPlay} />
					<Text>Bob Vance</Text>
				</Box>
			</Box>
		</AccordionPanel>
		<AccordionPanel label='Birmingham Public Defender'>
			<Box direction='row' pad='medium' full flex>
				<Box flex justify='left' direction='row'>
					<Avatar src={EliWork} />
					<Text>Steve Marshall</Text>
				</Box>
				<Box flex justify='right' direction='row'>
					<Avatar src={EliPlay} />
					<Text>Bob Vance</Text>
				</Box>
			</Box>
		</AccordionPanel>
		<AccordionPanel label='Birmingham City Attorney'>
			<Box direction='row' pad='medium' full flex>
				<Box flex justify='left' direction='row'>
					<Avatar src={EliWork} />
					<Text>Steve Marshall</Text>
				</Box>
				<Box flex justify='right' direction='row'>
					<Avatar src={EliPlay} />
					<Text>Bob Vance</Text>
				</Box>
			</Box>
		</AccordionPanel>
	</Accordion>
)

export default Demo

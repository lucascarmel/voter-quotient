import React from 'react'
import { Accordion } from 'grommet'
import AccordianPanelOne from './AccordianDemoOne.jsx'
import AccordianPanelTwo from './AccordianDemoTwo.jsx'
import AccordianPanelThree from './AccordianDemoThree.jsx'
import AccordianPanelFour from './AccordianDemoFour.jsx'
import AccordianPanelFive from './AccordianDemoFive.jsx'

const AccordianDiv = () => (
	<Accordion multiple='true' width='large' margin='xsmall' animate={true}>
		<AccordianPanelOne />
		<AccordianPanelTwo />
		<AccordianPanelThree />
		<AccordianPanelFour />
		<AccordianPanelFive />
	</Accordion>
)

export default AccordianDiv

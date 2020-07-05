import React from 'react'
import { Accordion } from 'grommet'
import AccordianPanelDiv from './AccordianPanel.jsx'

const AccordianDiv = () => (
	<Accordion multiple='true' width='large' margin='x'>
		<AccordianPanelDiv />
		<AccordianPanelDiv />
		<AccordianPanelDiv />
		<AccordianPanelDiv />
		<AccordianPanelDiv />
	</Accordion>
)

export default AccordianDiv

import React from 'react'
import { Accordion } from 'grommet'
import AccordianPanelDiv from './AccordianPanel.jsx'
import EliPlay from '../Icons/eli-fun.jpg'
import EliWork from '../Icons/eli-serious.jpg'
import Barry from '../Icons/barry.jpg'

const AccordianDiv = () => (
	<Accordion multiple={true} width='large' margin='xsmall' animate={true}>
		<AccordianPanelDiv
			positionName={'Governor'}
			positionDescription={
				'The Governor of Colorado is the chief executive of the U.S. state of Colorado. The governor is the head of the executive branch of Colorado state government and is charged with enforcing state laws. The governor has the power to either approve or veto bills passed by the Colorado General Assembly, to convene the legislature, and to grant pardons, except in cases of treason or impeachment. The governor is also the commander-in-chief of the state military forces.'
			}
			division={'Colorado'}
			divisionColor={'red'}
			voteMargin={'157,283'}
			candidateOneName={'Charles Fauci'}
			candidateOneParty={'Democrat'}
			candidateOnePhoto={Barry}
			candidateOneOccupation={'Incumbent'}
			candidateOneTenure={23}
			candidateOneKeyEndorsements={4}
			candidateOneEndorsements={4}
			candidateTwoName={'Samantha Brown'}
			candidateTwoParty={'Democrat'}
			candidateTwoPhoto={Barry}
			candidateTwoOccupation={'Trial Layer'}
			candidateTwoTenure={31}
			candidateTwoKeyEndorsements={4}
			candidateTwoEndorsements={4}
		/>
		<AccordianPanelDiv
			positionName={'Attorney General'}
			positionDescription={
				'The Attorney General of the State of Colorado is the chief legal officer for the state of Colorado and the head of the Colorado Department of Law, a principal department of the Colorado state government. It is an elected position with a four-year term, and follows the same schedule as election of the governor.'
			}
			division={'Colorado'}
			divisionColor={'red'}
			voteMargin={'124,118'}
			candidateOneName={'Kwame Richardson'}
			candidateOneParty={'Democrat'}
			candidateOnePhoto={Barry}
			candidateOneOccupation={'Incumbent'}
			candidateOneTenure={23}
			candidateOneKeyEndorsements={4}
			candidateOneEndorsements={4}
			candidateTwoName={'Aditi Goel'}
			candidateTwoParty={'Democrat'}
			candidateTwoPhoto={Barry}
			candidateTwoOccupation={'Surgeon'}
			candidateTwoTenure={17}
			candidateTwoKeyEndorsements={4}
			candidateTwoEndorsements={4}
		/>
		<AccordianPanelDiv
			positionName={'District Attorney'}
			positionDescription={
				'Except in the smallest counties, a district attorney leads a staff of prosecutors, who are most commonly known as deputy district attorneys (DDAs). The Deputy who serves as the supervisor of the office is often called the Assistant District Attorney. The majority of prosecutions will be delegated to DDAs, with the district attorney prosecuting the most important cases and having overall responsibility for their agency and its work. Depending upon the system in place, DAs may be appointed by the chief executive of the jurisdiction or elected by local voters.'
			}
			division={'Arapahoe County'}
			divisionColor={'green'}
			voteMargin={'27,352'}
			candidateOneName={'Oliver Tims'}
			candidateOneParty={'Democrat'}
			candidateOnePhoto={Barry}
			candidateOneOccupation={'Incumbent'}
			candidateOneTenure={13}
			candidateOneKeyEndorsements={4}
			candidateOneEndorsements={4}
			candidateTwoName={'Gerald Chappel'}
			candidateTwoParty={'Democrat'}
			candidateTwoPhoto={Barry}
			candidateTwoOccupation={'News Anchor'}
			candidateTwoTenure={14}
			candidateTwoKeyEndorsements={4}
			candidateTwoEndorsements={4}
		/>
		<AccordianPanelDiv
			positionName={'Public Defender'}
			positionDescription={
				'In the United States, the term public defender is often used to describe a lawyer who is appointed by a court to represent a defendant who cannot afford to hire an attorney. More correctly, a public defender is a lawyer who works for a public defenders office, a government-funded agency that provides legal representation to indigent defendants. The court appoints the public defenders office to represent the defendant, and the office assigns a lawyer to the defendants case. In the federal criminal court system and some states and counties, representation is through a publicly funded public defender office.'
			}
			division={'Arapahoe County'}
			divisionColor={'green'}
			voteMargin={'16,997'}
			candidateOneName={'Iesha Byers'}
			candidateOneParty={'Democrat'}
			candidateOnePhoto={Barry}
			candidateOneOccupation={'Incumbent'}
			candidateOneTenure={8}
			candidateOneKeyEndorsements={4}
			candidateOneEndorsements={4}
			candidateTwoName={'Ricardo Perry'}
			candidateTwoParty={'Democrat'}
			candidateTwoPhoto={Barry}
			candidateTwoOccupation={'Community Organizer'}
			candidateTwoTenure={16}
			candidateTwoKeyEndorsements={4}
			candidateTwoEndorsements={4}
		/>
		<AccordianPanelDiv
			positionName={'Mayor'}
			positionDescription={
				'The mayor is the municipal head of government, the maximum civil authority at the municipal level, in most United States municipalities (such as cities, townships, etc.). In the United States, there are several distinct types of mayors, depending on whether the system of local government is council-manager government or mayor-council government.'
			}
			division={'City of Denver'}
			divisionColor={'blue'}
			voteMargin={'48,117'}
			candidateOneName={'Gerald Tims'}
			candidateOneParty={'Democrat'}
			candidateOnePhoto={Barry}
			candidateOneOccupation={'Incumbent'}
			candidateOneTenure={31}
			candidateOneKeyEndorsements={4}
			candidateOneEndorsements={4}
			candidateTwoName={'Alejandro Jiminex'}
			candidateTwoParty={'Democrat'}
			candidateTwoPhoto={Barry}
			candidateTwoOccupation={'City Councilman'}
			candidateTwoTenure={6}
			candidateTwoKeyEndorsements={4}
			candidateTwoEndorsements={4}
		/>
	</Accordion>
)

export default AccordianDiv

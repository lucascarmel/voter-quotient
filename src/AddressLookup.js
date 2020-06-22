import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './map-marker-alt-solid.svg'

const Button = styled.button`
	background-color: white;
	font-size: 1em;
	padding: 0.25em 1em;
	border: 2px solid black;
	border-radius: 3px;

	:hover {
		background-color: #c3c3c3;
	}
`

const Lookup = () => {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {}
	// }

	navigator.geolocation.getCurrentPosition(function (position) {
		console.log('Latitude is :', position.coords.latitude)
		console.log('Longitude is :', position.coords.longitude)
	})

	// const getLoc = () => {

	// }

	const renderLoc = () => {
		return (
			<h2>
				{('Latitude is :', this.position.coords.latitude)}
				<br />
				{('Longitude is :', this.position.coords.longitude)}
			</h2>
		)
	}

	return (
		<div>
			<Button onClick={Lookup}>
				Use Current Location{' '}
				<img src={logo} alt='Logo' width='20' height='20' />
			</Button>
			{renderLoc}
		</div>
	)
}

export default Lookup

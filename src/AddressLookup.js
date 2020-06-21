import React, { Component } from 'react'

class Lookup extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	getLoc() {
		navigator.geolocation.getCurrentPosition(function (position) {
			console.log('Latitude is :', position.coords.latitude)
			console.log('Longitude is :', position.coords.longitude)
		})
	}

	render() {
		return <button onClick={this.getLoc}>Use Current Location</button>
	}
}

export default Lookup

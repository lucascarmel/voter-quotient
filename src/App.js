import React from 'react'
import axios from 'axios'
import './App.css'
import { group } from 'd3-array'

// import Header from './Header.js'
import PlacesAutocomplete from './AddressInput.js'
import Lookup from './AddressLookup.js'
// import Table from './Table.js'
import styled from 'styled-components'

const Div = styled.div`
	display: inline-flex;
`

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			googleData: [],
			address: '',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.setState({ address: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault()
		axios
			.get(
				`https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBnjLZX5HZkzTc4HOKqUrOfxNDdHtCaMNI&address=
		    ${encodeURI(this.state.address)}`
			)
			.then((response) => {
				this.setState({ googleData: response.data })

				Array.from(
					group(this.state.googleData.offices, (d) => d.name),
					([office, value]) => ({
						office,
						level: value[0].levels[0],
						politicians: value[0].officialIndices.map(
							(d) => this.state.googleData.officials[d]
						),
					})
				)
			})
			.catch((error) => {
				console.log(error)
			})

		// console.log(this.state.googleData.offices.map((d) => d.name))
	}

	render() {
		// console.log(this.state.googleData)

		return (
			<div className='App'>
				<header className='App-header'>{/* <Header /> */}</header>
				<main>
					<h1>Voter Quotient</h1>
					<p>
						A ballot guide with opinions{' '}
						<span role='img' aria-label='Smirk Emoji'>
							😏
						</span>
					</p>
					<Div>
						<Lookup />
						<strong>&nbsp;&nbsp;or&nbsp;&nbsp;</strong>
						<PlacesAutocomplete />
					</Div>
				</main>
			</div>
		)
	}
}

export default App

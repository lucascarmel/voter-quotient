import React from 'react'
import axios from 'axios'
import { group } from 'd3-array'
// import logo from './logo.svg'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			officials: '',
			address: '',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.setState({ address: event.target.value })
	}
	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.address)
		event.preventDefault()
		axios
			.get(
				`https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBnjLZX5HZkzTc4HOKqUrOfxNDdHtCaMNI&address=
        ${encodeURI(this.state.address)}`
			)
			.then((response) => {
				this.setState({ officials: response.data.officials })
			})
			.catch((error) => {
				console.log(error)
			})

		Array.from(
			group(this.state.officials, (d) => d.name),
			([office, value]) => ({
				office,
				level: value[0].levels[0],
				politicians: value[0].officialIndices.map(
					(d) => this.state.officials[d]
				),
			})
		)
	}

	componentDidMount() {
		// axios
		// 	.get(
		// 		`https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBnjLZX5HZkzTc4HOKqUrOfxNDdHtCaMNI&address=
		//     ${encodeURI(this.state.address)}`
		// 	)
		// 	.then((response) => {
		// 		console.log(response)
		// 	})
		// 	.catch((error) => {
		// 		console.log(error)
		// 	})
	}

	render() {
		const { imageURL } = this.state
		return (
			<div className='App'>
				<header className='App-header'>
					<form onSubmit={this.handleSubmit}>
						<label>
							Your address:
							<input
								type='text'
								value={this.state.address}
								onChange={this.handleChange}
							/>{' '}
						</label>
						<input type='submit' value='Submit' />
					</form>
					<img src={imageURL} alt='dog' />
					{/* <img src={logo} className='App-logo' alt='logo' /> */}
					<p>
						Edit <code>src/App.js</code> and save to reload!
					</p>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'>
						Learn React
					</a>
					<table>
						<thead>
							<tr>
								<th>Hello</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Duh</td>
							</tr>
						</tbody>
					</table>
				</header>
			</div>
		)
	}
}

export default App

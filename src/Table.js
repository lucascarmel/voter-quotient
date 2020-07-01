import React from 'react'
import axios from 'axios'
import { group, rollup } from 'd3-array'

class Table extends React.Component {
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

				const cleanData = Array.from(
					group(this.state.googleData.offices, (d) => d.name),
					([office, value]) => ({
						office,
						level: value[0].levels[0],
						politicians: value[0].officialIndices.map(
							(d) => this.state.googleData.officials[d]
						),
					})
				)

				console.log(cleanData)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	render() {
		return <div>Ok!</div>
	}
}
export default Table

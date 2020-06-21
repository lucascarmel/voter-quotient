import React from 'react'
import styled from 'styled-components'

const OuterDiv = styled.div`
	border-bottom: 2px solid;
	width: 100vw;
	/* padding: 1rem; */
	display: inline-flex;
	justify-content: space-between;
	/* font-family: 'IBM Plex Mono', monospace; */
`

const InnerDiv = styled.div`
	display: inline-flex;
`

class Header extends React.Component {
	render() {
		return (
			<OuterDiv>
				Home
				<InnerDiv>Methodology About</InnerDiv>
			</OuterDiv>
		)
	}
}
export default Header

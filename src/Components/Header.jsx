import React from 'react'
import styled from 'styled-components'

const OuterDiv = styled.div`
	border-bottom: 2px solid;
	width: 100vw;
	display: inline-flex;
	justify-content: space-between;
`

const InnerDiv = styled.div`
	display: inline-flex;
`

const Header = () => {
	return (
		<OuterDiv>
			Home
			<InnerDiv>Methodology About</InnerDiv>
		</OuterDiv>
	)
}
export default Header

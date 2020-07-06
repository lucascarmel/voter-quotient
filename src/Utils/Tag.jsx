import styled from 'styled-components'
import Color from './Color'

const Tag = styled.span`
	color: ${(props) => (props.color ? Color(props.color) : 'black')};
	border-color: ${(props) =>
		props.color ? Color(props.color, 10, 40, 0.75) : 'white'};
	background-color: ${(props) =>
		props.color ? Color(props.color, 10, 40, 0.75) : 'white'};

	font-family: sans-serif;
	border: solid;
	border-width: thin;
	border-radius: 1rem;
	font-weight: 400;
	font-style: normal;
	font-weight: 400;
	font-size: 11.5px;
	line-height: 1.1em !important;
	letter-spacing: 0.7px;
	padding: 3px 4px 2px 6px;
	display: inline-table;
	/* margin: 0 0 0 -2px; */

	:hover {
		color: white;
		background-color: ${(props) => Color(props.color)};
	}
`

export default Tag

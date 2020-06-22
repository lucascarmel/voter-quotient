import React from 'react'
import usePlacesAutocomplete from 'use-places-autocomplete'
import styled from 'styled-components'

// import useOnclickOutside from 'react-cool-onclickoutside'
// import styled from 'styled-components'

import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
	// ComboboxOptionText,
} from '@reach/combobox'
import '@reach/combobox/styles.css'

const StyledComboboxPopover = styled(ComboboxPopover)`
	font-size: 1.6em;

	@media screen and (max-width: 600px) {
		font-size: 1em;
	}
`

const PlacesAutocomplete = () => {
	const {
		// ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		requestOptions: {
			/* Define search scope here */
		},
		debounce: 100,
	})
	// const ref = useOnclickOutside(() => {
	// 	// When user clicks outside of the component, we can dismiss
	// 	// the searched suggestions by calling this method
	// 	clearSuggestions()
	// })

	const handleInput = (e) => {
		// Update the keyword of the input element
		setValue(e.target.value)
	}

	const handleSelect = ({ description }) => () => {
		// When user selects a place, we can replace the keyword without request data from API
		// by setting the second parameter as "false"
		setValue(description, false)
		clearSuggestions()

		// Get latitude and longitude via utility functions
		// getGeocode({ address: description })
		// 	.then((results) => getLatLng(results[0]))
		// 	.then(({ lat, lng }) => {
		// 		console.log('📍 Coordinates: ', { lat, lng })
		// 	})
		// 	.catch((error) => {
		// 		console.log('😱 Error: ', error)
		// 	})
	}

	const renderSuggestions = () =>
		data.map((suggestion) => {
			const {
				id,
				structured_formatting: { main_text, secondary_text },
			} = suggestion

			return (
				<ComboboxOption
					key={id}
					onClick={handleSelect(suggestion)}
					value={main_text + ', ' + secondary_text}>
					{/* <strong>{main_text}</strong> <small>{secondary_text}</small> */}
				</ComboboxOption>
			)
		})

	return (
		<Combobox onSelect={handleSelect}>
			<ComboboxInput
				value={value}
				onChange={handleInput}
				placeholder='type your address'
				style={{ border: 'none' }}
			/>
			<StyledComboboxPopover portal={false}>
				{status === 'OK' && status.length > 0 ? (
					<ComboboxList>{renderSuggestions()} </ComboboxList>
				) : (
					<p
						style={{
							margin: 0,
							color: '#454545',
							padding: '0.2rem 0.5rem 0.5rem 0.5rem',
						}}>
						<span aria-label='embaressed face emoji' role='img'>
							😳
						</span>
						&nbsp;&nbsp;We couldn't find that address! Please try another.
					</p>
				)}
			</StyledComboboxPopover>
		</Combobox>
	)
}

export default PlacesAutocomplete

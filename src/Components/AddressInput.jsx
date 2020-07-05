import React, { useContext } from 'react' // KeyboardEvent
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete'
import useOnclickOutside from 'react-cool-onclickoutside'
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
	// ComboboxOptionText,
} from '@reach/combobox'
import '@reach/combobox/styles.css'

import { Context } from '../Contexts/LatLng'

const AddressInput = () => {
	const { setLatlng } = useContext(Context)
	const {
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		requestOptions: {
			/* Define search scope here */
		},
		debounce: 200,
	})
	const ref = useOnclickOutside(() => {
		// When user clicks outside of the component, we can dismiss
		// the searched suggestions by calling this method
		clearSuggestions()
	})

	const handleInput = (e) => {
		// Update the keyword of the input element
		setValue(e.target.value)
	}

	// const checkEnter = (e, suggestion) => {
	// 	if (e.charCode === 13) {
	// 		handleSelect(suggestion)
	// 	}
	// }

	const handleSelect = (description) => {
		// When user selects a place, we can replace the keyword without request data from API
		// by setting the second parameter as "false"
		setValue(description, false)
		clearSuggestions()

		// Get latitude and longitude via utility functions
		getGeocode({ address: description })
			.then((results) => getLatLng(results[0]))
			.then(({ lat, lng }) => {
				console.log('📍 Coordinates: ', { lat, lng })
				setLatlng({ lat, lng })
			})
			.catch((error) => {
				console.log('😱 Error: ', error)
			})
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
					// onClick={handleSelect(suggestion)}
					// use suggestion when "enter" is pressed
					// onKeyPress={checkEnter(e, suggestion)}
					value={main_text + ' ' + secondary_text}>
					{/* <ComboboxOptionText /> */}
				</ComboboxOption>
			)
		})

	return (
		<Combobox onSelect={handleSelect} ref={ref}>
			<ComboboxInput
				value={value}
				onChange={handleInput}
				placeholder='type your address'
				style={{ border: 'none', width: '500px' }}
				width='500px'
			/>
			<ComboboxPopover>
				{status === 'OK' && status.length > 0 ? (
					<ComboboxList persistSelection>{renderSuggestions()} </ComboboxList>
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
			</ComboboxPopover>
		</Combobox>
	)
}

export default AddressInput

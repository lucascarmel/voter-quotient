import React, { useState } from 'react'
import { TextInput } from 'grommet'

const AddressInput = () => {
	const [value, setValue] = React.useState('')
	return (
		<TextInput
			border='bottom'
			size='medium'
			placeholder='your address here'
			value={value}
			onChange={(event) => setValue(event.target.value)}
		/>
	)
}

export default AddressInput

import { useState } from 'react'
import C from './customSelect.module.scss';
import Select from 'react-select';
import { selectOptions, selectStyles, DropdownIndicator } from './selectService';

export function CustomSelect() {
	const [selectedOption, setSelectedOption] = useState({ value: 'ru', label: 'RU', color:'' })

	return (
		<Select
			className={C.select}
			defaultValue={selectedOption}
			onChange={(e) => setSelectedOption}
			options={selectOptions}
			styles={selectStyles}
			components={{ DropdownIndicator }} 
			isSearchable={false}
			/>
	)
}

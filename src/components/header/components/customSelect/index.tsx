import { useState } from 'react'
import C from './customSelect.module.scss';
import Select from 'react-select';
import { selectOptions, selectStyles, selectStylesDark, DropdownIndicator } from './selectService';

export function CustomSelect(props: {dark: boolean}) {
	const [selectedOption, setSelectedOption] = useState({ value: 'ru', label: 'RU', color:'' })

	return (
		<Select
			className={C.select}
			defaultValue={selectedOption}
			onChange={(e) => setSelectedOption}
			options={selectOptions}
			styles={props.dark ? selectStylesDark: selectStyles}
			components={{ DropdownIndicator }} 
			isSearchable={false}
			/>
	)
}

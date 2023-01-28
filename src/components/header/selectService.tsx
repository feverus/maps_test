import { ColourOption } from './header.props';
import rectangle from './media/rectangle.svg';
import { components, DropdownIndicatorProps } from 'react-select';

export const DropdownIndicator = (props: DropdownIndicatorProps<ColourOption, true>) => {
	return (
		<components.DropdownIndicator {...props}>
			<img src={rectangle} alt="Logo image" />
		</components.DropdownIndicator>
	)
}

export const selectOptions = [
	{ value: 'ru', label: 'RU', color: '' },
	{ value: 'en', label: 'EN', color: '' },
]

export const selectStyles = {
	control: (baseStyles: any) => ({
		...baseStyles,
		border: 'none', background: 'transparent', width: '60px'
	}),
	valueContainer: (baseStyles: any) => ({
		...baseStyles,
		padding: '0'
	}),
	indicatorSeparator: (baseStyles: any) => ({
		...baseStyles,
		display: 'none'
	}),
}
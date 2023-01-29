import { ColourOption } from '../../header.props';
import rectangle from './media/rectangle.svg';
import { components, DropdownIndicatorProps } from 'react-select';

export const DropdownIndicator = (props: DropdownIndicatorProps<ColourOption, true>) => {
	return (
		<components.DropdownIndicator {...props}>
			<img src={rectangle} alt="Выбор языка" />
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
		border: 'none', background: 'transparent', width: '33px', fontSize: '14px'
	}),
	valueContainer: (baseStyles: any) => ({
		...baseStyles,
		padding: '0'
	}),
	indicatorSeparator: (baseStyles: any) => ({
		...baseStyles,
		display: 'none'
	}),
	indicatorsContainer: (baseStyles: any) => ({
		...baseStyles,
		width: '12px'
	}),
	singleValue: (baseStyles: any) => ({
		...baseStyles,
		fontSize: '14px', width: '20px', color: '#212121', 
	}),
	menu: (baseStyles: any) => ({
		...baseStyles,
		fontSize: '12px', width: '33px', padding: '0'
	}),
	menuList: (baseStyles: any) => ({
		...baseStyles,
		padding: '2px 0', margin: '0'
	}),
	option: (baseStyles: any) => ({
		...baseStyles,
		padding: '2px 0', margin: '0', textAlign: 'center'
	}),
}
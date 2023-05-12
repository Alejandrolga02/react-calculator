import PropTypes from 'prop-types';
import { useCallback, useContext } from 'react';
import { CalculatorContext } from './context';

export const NumberButton = ({icon, value}) => {
	const { numberClicked } = useContext(CalculatorContext);

	const handleClick = useCallback(() => {
		numberClicked(value);
	}, [numberClicked, value]);

	return (
		<a onClick={handleClick} className='w-full min-h-[2rem] xs:p-4 grid place-items-center bg-[#0096c7] hover:bg-[#0077b6] transition-all duration-300 cursor-pointer py-2 px-4 rounded-md'>
			{icon}
		</a>
	);
}

NumberButton.propTypes = {
	icon: PropTypes.object.isRequired,
	value: PropTypes.number.isRequired
}
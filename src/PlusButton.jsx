import { useCallback, useContext } from 'react';
import { FaPlus } from 'react-icons/fa';

import { CalculatorContext } from './context';

export const PlusButton = () => {
	const { plusClicked } = useContext(CalculatorContext);

	const handleClick = useCallback(() => {
		plusClicked();
	}, [plusClicked]);

	return (
		<button onClick={handleClick} className='w-full min-h-[2rem] xs:p-4 grid place-items-center bg-[#0096c7] hover:bg-[#0077b6] transition-all duration-300 cursor-pointer py-2 px-4 rounded-md'>
			<FaPlus />
		</button>
	);
}

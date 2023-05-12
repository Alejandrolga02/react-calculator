import { useCallback, useContext } from 'react';
import { BsBackspace } from 'react-icons/bs';

import { CalculatorContext } from './context';

export const BackspaceButton = () => {
	const { backspaceClicked } = useContext(CalculatorContext);

	const handleClick = useCallback(() => {
		backspaceClicked();
	}, [backspaceClicked]);

	return (
		<button onClick={handleClick} className='w-full min-h-[2rem] xs:p-4 grid place-items-center bg-[#0096c7] hover:bg-[#0077b6] transition-all duration-300 cursor-pointer py-2 px-4 rounded-md'>
			<BsBackspace />
		</button>
	);
}
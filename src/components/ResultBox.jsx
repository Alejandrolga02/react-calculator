import { useContext, useEffect } from "react";

import { CalculatorContext } from "../context";

export const ResultBox = () => {
	const { 
		displayInput, 
		displayOperation, 
		numberClicked, 
		setOperation, 
		resultClicked, 
		backspaceClicked, 
		cleanClicked,
	} = useContext(CalculatorContext);
	
	useEffect(() => {
		const keyPressed = (e) => {
			e.preventDefault();

			const { key, keyCode } = e;
			if ((keyCode >= 96 && keyCode <= 105) || (keyCode >= 48 && keyCode <= 57) || key === '.') {
				numberClicked(key);
			} else if (key === '+' || key === '-' || key === '*' || key === '/') {
				setOperation(key);
			} else if (key === 'Enter') {
				resultClicked();
			} else if (key === 'Backspace') {
				backspaceClicked();
			} else if (key === 'Delete') {
				cleanClicked();
			}
		}

		window.addEventListener("keydown", keyPressed);
		return () => {
			window.removeEventListener("keydown", keyPressed);
		}
	});


	return (
		<div className="col-span-4 rounded-lg">
			<label htmlFor="input" className="transition-all duration-500 bg-white block rounded-t-lg w-full py-1 px-2 text-end font-sans font-semibold">
				{displayOperation}
			</label>
			<input type="text" id="input" value={displayInput} readOnly className="w-full outline-none text-end py-1 px-2 font-sans font-semibold rounded-b-lg cursor-auto" />
		</div>
	);
};

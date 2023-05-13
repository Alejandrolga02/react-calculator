import { useContext } from "react";

import { CalculatorContext } from "../context";

export const ResultBox = () => {
	const { displayInput, changeInput, displayOperation } = useContext(CalculatorContext);

	return (
		<div className="col-span-4 rounded-lg">
			<label htmlFor="input" className="transition-all duration-500 bg-white block rounded-t-lg w-full py-1 px-2 text-end font-sans font-semibold">
				{displayOperation}
			</label>
			<input type="text" id="input" value={displayInput} onChange={(e) => changeInput(e.target.value)} className="w-full outline-none text-end py-1 px-2 font-sans font-semibold rounded-b-lg" />
		</div>
	);
};

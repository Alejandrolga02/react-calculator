import { useContext } from "react";

import { CalculatorContext } from "./context";

export const ResultBox = () => {
	const { displayInput, changeInput, displayOperation } = useContext(CalculatorContext);

	return (
		<div className="col-span-4">
			<label htmlFor="input" className="rounded-t-md bg-white block w-full py-1 px-2 text-end">
				{displayOperation}
			</label>
			<input type="text" id="input" value={displayInput} onChange={(e) => changeInput(e.target.value)} className="w-full outline-4 outline-[#0077b6] rounded-b-md text-end py-1 px-2 font-sans font-semibold" />
		</div>
	);
};

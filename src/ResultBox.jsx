import { useContext } from "react";
import { CalculatorContext } from "./context";

export const ResultBox = () => {
	const { input, changeInput } = useContext(CalculatorContext);

	return (
		<div className="col-span-4">
			<div className="rounded-t-md bg-gray-100">h1</div>
			<input type='text' value={input} 
				onChange={(e) => changeInput(e.target.value)} 
				className="w-full outline-4 outline-[#0077b6] rounded-b-md text-end py-1 px-2 font-sans font-semibold" 
			/>
		</div>
	);
}
import { useReducer } from "react";
import PropTypes from "prop-types";

import { CalculatorContext, types, calculatorReducer, initContext } from "./";

export const CalculatorProvider = ({ children }) => {
	const [calculatorState, dispatch] = useReducer(calculatorReducer, {}, () => initContext());

	const numberClicked = (value) => {
		const payload = value;

		const action = {
			type: types.numberClicked,
			payload,
		};

		dispatch(action);
	};

	const cleanClicked = () => {
		const action = {
			type: types.clean,
		};

		dispatch(action);
	};

	const backspaceClicked = () => {
		const action = {
			type: types.backspace,
		};

		dispatch(action);
	};

	const setOperation = (operation) => {
		const action = {
			type: types.operation,
			payload: {
				operation,
			},
		};

		dispatch(action);
	};

	const resultClicked = () => {
		const action = {
			type: types.result,
		};

		dispatch(action);
	};

	const toggleSign = () => {
		const action = {
			type: types.toggleSign,
		};

		dispatch(action);
	};

	return (
		<CalculatorContext.Provider
			value={{
				...calculatorState,

				// Methods
				numberClicked, 
				cleanClicked, 
				backspaceClicked, 
				setOperation, 
				resultClicked, 
				toggleSign, 
			}}>
			{children}
		</CalculatorContext.Provider>
	);
};

CalculatorProvider.propTypes = {
	children: PropTypes.object.isRequired,
};

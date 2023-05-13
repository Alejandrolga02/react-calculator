import { useReducer } from "react";
import PropTypes from "prop-types";

import { CalculatorContext, types, calculatorReducer, initContext } from "./";

export const CalculatorProvider = ({ children }) => {
	const [calculatorState, dispatch] = useReducer(calculatorReducer, {}, initContext);

	const numberClicked = (value) => {
		const payload = value;

		const action = {
			type: types.numberClicked,
			payload,
		};

		dispatch(action);
	};

	const changeInput = (value) => {
		const payload = value;
		
		const action = {
			type: types.typedIn,
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
			payload: calculatorState.input,
		};

		dispatch(action);
	};

	const minusClicked = () => {
		const action = {
			type: types.minus,
			payload: calculatorState.input,
		};

		dispatch(action);
	};

	const plusClicked = () => {
		const action = {
			type: types.plus,
			payload: calculatorState.input,
		};

		dispatch(action);
	};

	const resultClicked = () => {
		const { prevInput, operation, input } = calculatorState;

		const action = {
			type: types.result,
			payload: {
				prevInput,
				operation,
				input
			}
		};


		dispatch(action);
	};

	return (
		<CalculatorContext.Provider
			value={{
				...calculatorState,

				// Methods
				numberClicked,
				changeInput,
				cleanClicked,
				backspaceClicked,
				minusClicked,
				plusClicked,
				resultClicked,
			}}>
			{children}
		</CalculatorContext.Provider>
	);
};

CalculatorProvider.propTypes = {
	children: PropTypes.object.isRequired,
};

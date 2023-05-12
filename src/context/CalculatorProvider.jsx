import { useReducer } from "react";
import PropTypes from "prop-types";

import { CalculatorContext, types, calculatorReducer } from "./";

const init = () => {
	const state = {
		input: "",
	};

	return state;
};

export const CalculatorProvider = ({ children }) => {
	const [calculatorState, dispatch] = useReducer(calculatorReducer, {}, init);

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
			payload
		}

		dispatch(action);
	}

	const cleanClicked = () => {
		const action = {
			type: types.clean,
		}

		dispatch(action);
	}

	const backspaceClicked = () => {
		const action = {
			type: types.backspace
		}

		dispatch(action);
	}

	return (
		<CalculatorContext.Provider
			value={{
				...calculatorState,

				// Methods
				numberClicked,
				changeInput,
				cleanClicked,
				backspaceClicked
			}}>
			{children}
		</CalculatorContext.Provider>
	);
};

CalculatorProvider.propTypes = {
	children: PropTypes.object.isRequired
};

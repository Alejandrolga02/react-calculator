import { initContext, types } from './';
import { operations, cleanNumber } from '../helpers';

export const calculatorReducer = (state = {}, action) => {
	switch (action.type) {
		case types.numberClicked: {
			const { input } = state;
			const { payload } = action;

			const value = cleanNumber(input + payload);
			return {
				...state,
				input: value,
				displayInput: value,
			}
		}

		case types.clean:
			return initContext();

		case types.backspace: {
			const { input } = state;

			let resultString = input.slice(0, -1);
			if (resultString === '') {
				resultString = '0';
			}

			return {
				...state,
				input: resultString,
				displayInput: resultString
			}
		}

		case types.toggleSign: {
			const value = state.input * -1;
			return {
				...state,
				input: value,
				displayInput: value,
			}
		}

		case types.operation: {
			const { operation } = action.payload;
			const { input, prevInput } = state;
			const inputConverted = parseFloat(input);
			
			if (input === "0") {
				return {
					...state,
					operation,
					displayOperation: `${prevInput} ${operation}`,
				}
			}

			return {
				...state,
				input: "0",
				prevInput: inputConverted,
				displayOperation: `${input} ${operation}`,
				operation
			}

		}

		case types.result: {
			const { prevInput, operation, input } = state;
			let inputNumber = parseFloat(input);

			if (!operation) {
				return {
					...state,
					displayOperation: `${input} =`
				}
			}

			let result = 0;
			let displayOperation = '';
			if (!inputNumber || isNaN(inputNumber)) {
				result = operations[operation](prevInput, prevInput);
				inputNumber = prevInput;
				displayOperation = `${prevInput} ${operation} ${prevInput} =`
			} else {
				result = operations[operation](prevInput, inputNumber);
				displayOperation = `${prevInput} ${operation} ${inputNumber} =`;
			}

			return {
				...state,
				displayInput: result,
				displayOperation,
				input: inputNumber,
				prevInput: result,
			}
		}

		default:
			return state;
	}
}
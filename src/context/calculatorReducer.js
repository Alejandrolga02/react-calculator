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

		case types.typedIn: {
			const { payload } = action;
			const value = cleanNumber(payload);

			return {
				...state,
				input: value,
				displayInput: value
			}
		}

		case types.clean:
			return initContext();

		case types.backspace: {
			const { input } = state;
			const inputString = input.toString();
			const resultString = inputString.slice(0, -1);
			
			let result = parseFloat(resultString);
			if (!resultString || isNaN(result)) {
				result = 0;
			}

			return {
				...state,
				input: result,
				displayInput: result
			}
		}

		case types.operation: {
			const { operation } = action.payload;
			const { input } = state;

			return {
				...state,
				input: '',
				prevInput: input,
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
				displayOperation = `${prevInput} ${operation} ${prevInput} =`
			} else {
				result = operations[operation](prevInput, inputNumber);
				displayOperation = `${prevInput} ${operation} ${inputNumber} =`;
			}

			return {
				...state,
				displayInput: result,
				prevInput: result,
				displayOperation
			}
		}

		default:
			return state;
	}
}
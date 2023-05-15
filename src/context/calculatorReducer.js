import { initContext, types } from './';
import { operations, cleanNumber } from '../helpers';

export const calculatorReducer = (state = {}, action) => {
	switch (action.type) {
		case types.numberClicked: {
			const { input, operationMade, operationChanged } = state;
			const { payload } = action;

			if (operationMade && !operationChanged) {
				return initContext(payload);
			}

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
			const value = (state.input * -1).toString();
			return {
				...state,
				input: value,
				displayInput: value,
			}
		}

		case types.operation: {
			const { operation } = action.payload;
			const { input, prevInput, operationMade } = state;

			if (input === "0") {
				return {
					...state,
					operation,
					operationChanged: true,
					displayOperation: `${prevInput} ${operation}`,
				}
			}

			let inputConverted = parseFloat(input);
			let displayOperation = `${input} ${operation}`;
			if (operationMade) {
				inputConverted = prevInput;
				displayOperation = `${inputConverted} ${operation}`;
			}

			return {
				...state,
				input: "0",
				prevInput: inputConverted,
				displayOperation,
				operation,
				operationChanged: true
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
				displayInput: result.toString(),
				displayOperation,
				input: inputNumber.toString(),
				prevInput: result,
				operationMade: true,
				operationChanged: false
			}
		}

		default:
			return state;
	}
}
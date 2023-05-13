import { initContext, types } from './';
import { operations, cleanNumber } from '../helpers';

export const calculatorReducer = (state = {}, action) => {
	switch (action.type) {
		case types.numberClicked: { 
			const value = cleanNumber(state.input + action.payload);
			
			return {
				...state,
				input: value,
				displayInput: value,
			}
		}

		case types.typedIn: {
			const value = cleanNumber(action.payload);

			return {
				...state,
				input: value,
				displayInput: value
			}
		}

		case types.minus: {
			const { payload } = action;
			console.log(payload);
			const value = parseFloat(payload);

			if (!value) {
				return state;
			}

			return {
				...state,
				input: '',
				prevInput: value,
				displayOperation: `${value} -`,
				operation: `-`
			}
		}

		case types.plus: {
			const { payload } = action;

			const value = parseFloat(payload);

			if (!value) {
				return state;
			}

			return {
				...state,
				displayOperation: `${value} +`,
				operation: `+`,
				input: '',
				prevInput: value,
			}
		}

		case types.result: {
			const { prevInput, operation, input } = action.payload;
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

		case types.clean:
			return initContext();

		case types.backspace:
			return {
				...state,
				input: action.payload.slice(0, -1)
			}

		default:
			return state;
	}
}
import { initContext, types } from './';
import { operations } from '../helpers';

export const calculatorReducer = (state = {}, action) => {
	switch (action.type) {
		case types.numberClicked:
			return {
				...state,
				input: state.input + action.payload,
				displayInput: state.input + action.payload,
			}

		case types.typedIn:
			return {
				...state,
				input: action.payload,
				displayInput: action.payload
			}

		case types.minus: {
			const { payload } = action;

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
			let inputNumber = parseFloat(input)
			
			
			let displayInput = 0;
			if (!inputNumber || isNaN(inputNumber)) {
				displayInput = operations[operation](prevInput, prevInput);
			} else {
				displayInput = operations[operation](prevInput, inputNumber);
			}

			return {
				...state,
				displayInput,
				displayOperation: ''
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
import { types } from './';

export const calculatorReducer = (state = {}, action) => {
	switch (action.type) {
		case types.numberClicked:
			return {
				...state,
				input: state.input + action.payload
			}

		case types.typedIn:
			return {
				...state,
				input: action.payload
			}

		case types.minus:
			break;

		case types.clean:
			return {
				input: ''
			}

		case types.backspace:
			return {
				input: state.input.slice(0, -1)
			}


		default:
			return state;
	}
}
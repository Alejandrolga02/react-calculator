export const initContext = (input = "0") => {
	const state = {
		input,
		displayInput: input,
		prevInput: 0,
		displayOperation: "",
		operation: '',
		operationMade: false,
		operationChanged: false
	};
	
	return state;
};
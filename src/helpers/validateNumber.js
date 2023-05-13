export const cleanNumber = (input = '') => {
	const cleanedInput = input.replaceAll(/\D./ig, '');
	
	if (!cleanedInput) {
		return 0;
	}

	return parseFloat(cleanedInput);
}
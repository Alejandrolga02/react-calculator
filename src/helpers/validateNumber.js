export const cleanNumber = (input = '') => {
	const inputArr = input.split('');

	if (inputArr.length === 0) {
		return 0;
	}

	let dotFound = false;
	const resultArr = inputArr.map((element, index) => {
		// The string could begin with only one "+" or a "-"
		if ((index === 0) && (element === '-' || element === '+')) {
			return element;
		}

		// The string content can be only numbers between 0-9
		if (element.charCodeAt(0) >= 48 && element.charCodeAt(0) <= 57) {
			return element;
		}

		// The string can contain one dot, if there are more there will be removed
		if (element === '.' && !dotFound) {
			dotFound = true;
			return element;
		}
		return;
	});
	const result = resultArr.join('');
	return parseFloat(result);
}
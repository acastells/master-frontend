const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

// using recursive method
const flattenArray = (array) => {
	return array.reduce((flatArray, value, _, __) => {
		if (Array.isArray(value)) {
			return flatArray.concat(flattenArray(value));
		} else {
			return flatArray.concat(value)
		}
	}, []);
};

const flattedSample = flattenArray(sample);
console.log(flattedSample); // [1, 2, 3, 4, 5, 6, 7, 8, 9];

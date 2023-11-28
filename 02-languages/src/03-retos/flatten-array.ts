type NestedArray<T> =
	| T
	| T[]
	| Array<NestedArray<T>>


// WIP !!! Try to type it

const sample: NestedArray<number> = [
	1, 
	[2, 3], 
	[[4], [5, 6, [7, 8, [9]]]]];

// using recursive technique
const flattenArray = <T>(array: Array<NestedArray<T>>): T[] => {
	return array.reduce<T[]>((flatArray, value, _, __) => {
		if (Array.isArray(value)) {
			return flatArray.concat(flattenArray(value));
		} else {
			return flatArray.concat(value as T); // casting
		}
	}, []); // valor inicial es un array vacio, que se va a ir modificando por la función reductora
};

const flattedSample = flattenArray(sample);
console.log("ORIGINAL ->", sample);
console.log("FLATTED ->", flattedSample); // should be [1, 2, 3, 4, 5, 6, 7, 8, 9];

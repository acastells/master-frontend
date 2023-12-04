// TODO WIP Typing

/*


type NestedArray<T> = T | NestedArray<T>[]


const sample: NestedArray<number> = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
const sample1: NestedArray<number> = [1];
const sample2: NestedArray<number> = [[2, 3]];
const sample3: NestedArray<number> = [[[4], [5, 6, [7, 8, [9]]]]];


const flattenArray = <T>(array: NestedArray<T>): T[] => {

	const reductorFunction = (flatArray: T[], value: NestedArray<T> | T, _, __) => {
		if (Array.isArray(value)) {
			return flatArray.concat(flattenArray(value));
		} else {
			return flatArray.concat(value);
		}
	};

	return array.reduce(reductorFunction, [])
	// valor inicial es un array vacio, que se va a ir modificando por la función reductora
};

const flattedSample = flattenArray(sample);
console.log("ORIGINAL ->", sample);
console.log("FLATTED ->", flattedSample); // será [1, 2, 3, 4, 5, 6, 7, 8, 9];

*/

// NestedArray es un array que contiene: 1. el tipo generico (en este caso number) o 2. Otro Array
type NestedArray<T> = Array<T | NestedArray<T>>; 

/* 
	Clean recursive solution
	Base case = arr no es NestedArray, 
	Recursive case = arr es NestedArray
*/

const sample: NestedArray<number> = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

function flatten<T = any>(arr: NestedArray<T>): T[] {
	return ([] as T[]).concat(
		...arr.map((x) => {
			return Array.isArray(x) ? flatten(x) : x;
		})
	);
}

console.log(flatten(sample))

/* 
	Alternative solution:
	Force brute flatten
	"""recursive"""
*/

function isFlat(array) {
	var result = true;
	array.forEach((value, index) => {
		if (typeof value !== "number") {
			result = false;
		}
	});
	return result;
}

function flattenForceBrute(arr) {
	while (isFlat(arr) === false) {
		arr = arr.flat();
	}
	return arr;
}

console.log(flattenForceBrute(sample))
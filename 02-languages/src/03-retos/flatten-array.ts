type NestedArray<T> = T | NestedArray<T>[];

// type guard function
function isNestedArray<T>(arr: NestedArray<T>): arr is NestedArray<T>[] {
	return Array.isArray(arr);
}


/* 
	Clean recursive solution
	Base case = arr no es NestedArray, 
	Recursive case = arr es NestedArray
*/

const sample: NestedArray<number> = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

function flatten<T>(arr: NestedArray<T>): T[] {
	if (!isNestedArray(arr)) {
		return [arr]; // devolvemos un T[] para cumplir con el tipado de la funcion recursiva
	}
	return [].concat(...arr.map((element) => flatten(element))); // ...arr coge el valor del array que no es nested y se concatena a un array vacio
}

let start = performance.now();
const flattened: number[] = flatten(sample);
console.log(flattened);
let timeTaken = performance.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");



/* 
	Alternative solution:
	Force brute flatten
	"""recursive"""
*/

function isFlat(array){
	var result = true
	array.forEach((value, index) => {
		if (typeof value !== "number"){
			result = false
		}
	})
	return result
}

function flatten2(arr) {
	while(isFlat(arr) === false){
		arr = arr.flat()
	}
	return arr
}

start = performance.now()
const flattened2: number[] = flatten2(sample);
console.log(flattened2)
timeTaken = performance.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
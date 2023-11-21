console.log("************** DELIVERABLE 01 *********************");

// HEAD
const head = <T>(arr: T[]): T => {
	let [first_element] = arr
	return first_element
}

// TAIL
const tail = <T>(arr: T[]): T[] => {
	let [first_element, ...rest] = arr
	return rest
}

// INIT
const init = <T>(arr: T[]): T[] => {
	return arr.slice(0, arr.length - 1);
};

// LAST
const last = <T>(arr: T[]): T => {
	return arr[arr.length - 1]
};

let array: String[] = ["a", "b", "c", "d"]
console.log(array) // --> el array al principio y al final debe ser el mismo por que las funciones implementadas son inmutables
console.log(head(array))
console.log(tail(array))
console.log(init(array))
console.log(last(array))
console.log(array)
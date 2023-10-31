console.log("************** DELIVERABLE 01 *********************");

// HEAD
const head = (arr) => {
	let [first_element] = arr
	return first_element
}

// TAIL
const tail = (arr) => {
	let [first_element, ...rest] = arr
	return rest
}

// INIT
const init = (arr) => {
	return arr.slice(0, arr.length - 1);
};

// LAST
const last = (arr) => {
	return arr[arr.length - 1]
};

let array = ["a", "b", "c", "d"]
console.log(head(array))
console.log(tail(array))
console.log(init(array))
console.log(last(array))
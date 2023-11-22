/*
 *
 *
 * APARTADO A
 *
 *
 */

const myObject = {
	a: 1,
	b: {
		c: null,
		d: {
			e: 3,
			f: {
				g: "bingo",
			},
		},
	},
};

const deepGetNoReduce = (result, ...keys) => {
	for (let key of keys) {
		if (result && result[key] !== undefined) {
			result = result[key];
		} else {
			result = undefined;
		}
	}
	return result;
};

const deepGet = (myObject, ...keys) => {
	return keys.reduce(
		// 1rst argument, callback with (accumulator, currentValue, _currentIndex, _array)
		(acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
		// 2nd argument = initialValue of accumulator
		myObject
	);
};

//console.log(deepGet(myObject, "x")); // undefined
//console.log(deepGet(myObject, "a")); // 1
//console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
//console.log(deepGet(myObject, "b", "c")); // null
//console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
//console.log(deepGet(myObject)); // {a: 1, b: {...}}

/*
 *
 *
 * APARTADO B
 *
 *
 */

const myObject2 = {};

const deepSet = (valueToSet, result, ...keys) => {
	for (let i in keys) {
		let key = keys[i]

		if (result && result[key] !== undefined) {
			result[key] = {};
		}
		
		//WIP
	}
	return result
};

deepSet(1, myObject, "a", "b");
console.log(JSON.stringify(myObject)); // {a: { b: 1}}
deepSet(2, myObject, "a", "c");
console.log(JSON.stringify(myObject)); // {a: { b: 1, c: 2}}
deepSet(3, myObject, "a");
console.log(JSON.stringify(myObject)); // {a: 3}
deepSet(4, myObject);
console.log(JSON.stringify(myObject)); // Do nothing // {a: 3}

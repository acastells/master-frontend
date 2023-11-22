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

const deepSet = (value, obj, ...keys) => {
	if (keys.length === 0) {
		return
	}

	for (let i = 0; i < keys.length - 1; i++) {
		const key = keys[i];

		// if obj[key] is not defined, we create an empty object
		if (typeof obj[key] !== "object") {
			obj[key] = {};
		}

		// go to the next level of the object:
		// If it is the last one, we will exit for-loop and set value, else will keep going inside of the object
		obj = obj[key];
	}

	// We know that the correct structure is created now (= no errors will raise), so let's set the value
	let last_key = keys[keys.length-1]
	obj[last_key] = value;
};

deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2)); // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2)); // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2)); // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2)); // Do nothing // {a: 3}

console.log("************** DELIVERABLE 02 *********************");


const concat = (a, b) => {
	return [...a, ...b]
};

const concatAll = (...arrs) => {
	let resultArr = [];
	for (let arr of arrs) {
		resultArr = [...resultArr, ...arr]
	}
	return resultArr;
}

const arr1 = ["please"]
const arr2 = ["concatenate", "me"]
const arr3 = ["can", "you"]

console.log(concat(arr1, arr2))
console.log(concatAll(arr1, arr3, arr2))
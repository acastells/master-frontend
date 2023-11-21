console.log("************** DELIVERABLE 02 *********************");

type ConcatAllFunctionTyping<T> = (...arrs: T[][]) => T[];

const concat = <T>(a: T[], b: T[]): T[] => {
  return [...a, ...b];
};

const concatAll: ConcatAllFunctionTyping<any> = (...arrs) => {
  let resultArr: any[] = [];
  for (let arr of arrs) {
    resultArr = [...resultArr, ...arr];
  }
  return resultArr;
};

const concatAllRecursive = <T>(...arrs: T[][]): T[] => {
  if (arrs.length === 0) {
    return [];
  }
  const [first, ...rest] = arrs;
  return [...first, ...concatAllRecursive(...rest)];
};

const arr1: String[] = ["please", "..."];
const arr2: String[] = ["concatenate", "me"];
const arr3: String[] = ["can", "you"];

console.log(concat(arr1, arr2));
console.log(concatAll(arr1, arr3, arr2));
console.log(concatAllRecursive(arr1, arr3, arr2));

const expensiveFunction = () => {
	console.log("Una única llamada");
	return 3.1415;
};

// Apartado A, Currying
const memoizeCurrying = (fnToMemoize) => {
	let memoizedResult;

	return () => {
		if (memoizedResult === undefined) {
			memoizedResult = fnToMemoize();
		}
		return memoizedResult;
	};
};

// Apartado B, Immediately Invoked Function Expression
const memoizeIIFE = (fnToMemoize) => ((memoizedResult) => () => memoizedResult === undefined ? memoizedResult = fnToMemoize() : memoizedResult)();


let memoized = memoizeCurrying(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

console.log("----");

memoized = memoizeIIFE(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415



// Apartado C
// Mapa y creación de keys
let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => (count++, `${text} `.repeat(repetitions).trim())

const memoizeWithArgs = (fnToMemoize) => {
	let memoizedResults = {}

	return (...args) => {
		// hacemos una key con todos los argumentos que se nos pasan
		const key = args.map(arg => JSON.stringify(arg)).join("-")
		if (!(key in memoizedResults)) {
			const value = fnToMemoize(...args)
			memoizedResults[key] = value;
			return value
		}
		return memoizedResults[key]
	};
};

const memoizedGreet = memoizeWithArgs(repeatText);

console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);                     // 2
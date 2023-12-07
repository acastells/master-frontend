const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
	await delay(time);
	console.log(message);
};

const triggers = [
	async () => await showMessage([600, "fourth"]), // === () => setTimeout(() => console.log("fourth"), 600),
	async () => await showMessage([1000, "fifth"]),
	async () => await showMessage([200, "second"]),
	async () => await showMessage([400, "third"]),
];

const execAllPromisesSequentially = (promises) => {
	let currentPromise: Promise<void> = Promise.resolve();
	promises.forEach((promise) => {
		currentPromise = currentPromise.then(() => promise()); // Chain currentPromise with nextPromise
	});
	return currentPromise;
};

const run = (triggers) => {
	console.log("first");

	let promiseWrappers: Promise<void>[] = []; // stores promises that are wrapping the original triggers
	let promisesSorted: Promise<void>[] = []; // stores promises in the order they should execute sequentially

	triggers.forEach((trigger, index) => {
		promiseWrappers.push(
			new Promise((resolve) =>
				trigger().then(() => {
					promisesSorted.unshift(trigger); // push to the start, so the promises are already sorted
					resolve(null);
				})
			)
		);
	});

	Promise.all(promiseWrappers).then(() => {
		console.log("---");
		execAllPromisesSequentially(promisesSorted).then(() => {
			console.log("first");
		});
	});
};

run(triggers);

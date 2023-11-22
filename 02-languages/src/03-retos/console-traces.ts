const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([600, "fourth"]), // ==== () => setTimeout(() => console.log("fourth"), 200),
  async () => await showMessage([1000, "fifth"]),
  async () => await showMessage([200, "second"]),
  async () => await showMessage([400, "third"]),
];

const execPromisesSequential = (promises) => {
	let currentPromise: Promise<void> = Promise.resolve();   //
	promises.forEach((promise) => {	  
		currentPromise = currentPromise.then(() => promise()); // Chain currentPromise with nextPromise
	});
	return currentPromise;
  };

const run = (triggers) => {
  console.log("first");

  let index_triggered: number[] = []; // stores the indexes of the order that the promises have been resolved
  let array_promises: Promise<void>[] = [];  // stores promises that are wrapping the original triggers
  let new_promises_sorted: Promise<void>[] = [] // stores promises in the inverted order 

  triggers.forEach((trigger, index) => {
	array_promises.push(new Promise((resolve) => trigger().then(() => { index_triggered.push(index); resolve(null)})))
  });

  Promise.all(array_promises).then(() => {
	console.log("---")

	while(index_triggered.length != 0){
		new_promises_sorted.push(triggers[index_triggered.pop()])
	}
	execPromisesSequential(new_promises_sorted).then(() => {
		console.log("first")
	})
  })
};

run(triggers);

console.log("************** DELIVERABLE 03 *********************");

function clone(source) {
	return { ...source }
}

function merge(source, target) {
	return { ...clone(target), ...clone(source) }
}

const personA = { id: 1, name: "Maria", surname: "Ibañez", country: "SPA" };
const personB = { id: 2, name: "Luisa", age: 31, married: true };

// CLONING
let clonedPerson = clone(personA);
console.log(clonedPerson)
console.log(clonedPerson.country === personA.country)
personA.country = "ENG" // if we change one value, the cloned one does not get modified, meaning that the countries must be different
console.log(clonedPerson.country == personA.country)


// MERGING
let mergedPerson = merge(personA, personB)
console.log(mergedPerson)
console.log("************** DELIVERABLE 03 *********************");

function clone<T>(source: T): T {
  return { ...source };
}

function merge<T>(source: T, target: T): T {
  return { ...clone(target), ...clone(source) };
}

interface Person {
  id: Number;
  name: String;
  surname?: String;
  country?: String;
  age?: Number;
  married?: Boolean;
}

const personA: Person = {
  id: 1,
  name: "Maria",
  surname: "Ibañez",
  country: "SPA",
};
const personB: Person = {
  id: 2,
  name: "Luisa",
  age: 31,
  married: true,
};

// CLONING
let clonedPerson: Person = clone(personA);
console.log(clonedPerson);
console.log(clonedPerson.country === personA.country);
personA.country = "ENG"; // if we change value on personA, the cloned one remains unmodified
console.log(clonedPerson.country == personA.country);

// MERGING
let mergedPerson: Person = merge(personA, personB);
console.log(mergedPerson);

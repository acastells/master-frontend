/* 
	Cuestión 1
	¿Existe alguna forma de que la expresión x === x de como resultado false?
	https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/NaN
	- Nan se utiliza para representar un valor que no es un numero 
	- También NaN nunca es equivalente con cualquier otro número, incluido el mismo NaN;
	- no se puede comprobar el valor de un NaN con otro NaN, ya que no sabemos si el valor original es el mismo
	- Number("ThisIsNotANumber") === Number("This is nor a Number")
*/

const x = NaN;
console.log(x === x); // false

/*
	Cuestión 2
	Habiendo resuelto la Cuestión l, ¿como implementarías una función que compruebe si un determinado valor es NaN?
	https://developer.mozilla.org/en-US/docs/Glossary/Falsy
	- Podemos utilizar isNaN de JS, o bien comprobar que sea un number y ese valor comparado consigo mismo sea false
*/
const isNaNValue = (v) => typeof v === "number" && v !== v;
console.log(isNaNValue(NaN)); // true

/* 
	Cuestión 3
	Habiendo resuelto la Cuestion 2 ¿Existe alguna forma de que la expresión !isNaNValue(y) && y !== y de como resultado true?
	- No, no existe forma. La unica forma de que "y !== y" es que "y" sea "NaN". Y la primera condición nos evita que "y" sea NaN
*/
const y = NaN;
console.log(!isNaNValue(y) && y !== y); // false

/*
	Cuestión 4
	¿Podrías dar con alguna forma de que la expresión x + 1 === x - 1 arroje true?
	- Solo con Infinity. Infinity es el unico valor al que hacer cualquier operación no afecta el valor
	https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Infinity
*/
const z = Infinity;
console.log(z + 1 === z - 1); // true

/*
	Cuestión 5
	Se te ocurre alguna forma de hacer que la expresión x > x de como resultado true?
	- Con los falsy values, No
	- Con objetos o funciones, No porque se compara por referencia
	- Con numero finitos o strings, tampoco
	- Ni con +0, -0, +Infinity, -Infinity
	- La unica forma que se me viene es sobreescribir el valueOf. Así, cada vez que se intenta comparar el valor primitivo podemos modificarlo para que sea menor
	https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
*/
function CustomNumber(n) {
	this.number = n;
}
CustomNumber.prototype.valueOf = function () {
	return --this.number;
};

const a = new CustomNumber(10);
console.log(a > a); // true

console.log("************** DELIVERABLE 04 *********************");


interface Book {
	title: string,
	isRead: boolean
}

function isBookRead(books: Array<Book>, titleToSearch: string) : boolean {
	let result = books.filter((book) => book.title === titleToSearch && book.isRead === true);
	return result.length > 0
}


const books = [
	{ title: "Harry Potter y la piedra filosofal", isRead: true },
	{ title: "Canción de hielo y fuego", isRead: false },
	{ title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
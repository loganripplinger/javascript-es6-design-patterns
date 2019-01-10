import Book from './book';

export default class BookFactory {
	constructor() {}
	generate(genre, author, title) {
		let book;

		switch(genre) {
		case 'scary':
			book = new Book(author, title)
			book.childrensBook = false;
      book.genre = 'scary';
			break;

		default:
			book = new Book(author, title)
			break;
		}

    return book;
	}
}
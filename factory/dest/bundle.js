(function () {
  'use strict';

  /*! by @WebReflection & @daw985 */

  // full module, compatible with node 0.8+ & browser
  // https://github.com/WebReflection/tressa

  // for sync tests
  function test(condition, message) {
    try {
      console.assert.apply(console, arguments);
      if (typeof message === 'string' && condition) {
        console.log('✔ ' + message);
      }
    } catch(error) {
      test.exitCode = 1;
      console.error('✖ ' + error);
    }
  }

  // for async tests
  test.async = function (fn, timeout) {
    var timer = setTimeout(
      function () { test(false, 'timeout ' + fn); },
      timeout || test.timeout
    );
    fn(function () { clearTimeout(timer); });
  };

  // default timeout
  test.timeout = 10000;

  // for node env only
  try {
    process.on('exit', function () {
      process.exit(test.exitCode || 0);
    });
    module.exports = test;
  } catch(browser) {}

  class Book {
  	constructor(author, title) {
  		this.author = author;
  		this.title = title;
  	};
  }

  class BookFactory {
  	constructor() {}
  	generate(genre, author, title) {
  		let book;

  		switch(genre) {
  		case 'scary':
  			book = new Book(author, title);
  			book.childrensBook = false;
        book.genre = 'scary';
  			break;

  		default:
  			book = new Book(author, title);
  			break;
  		}

      return book;
  	}
  }

  class Author {
  	constructor(name, url) {
      this.name = name;
      this.url = url;
    }
  }

  ((desc) => {
    const scaryBookData = {
      author: {
        name: 'betty wright',
        url: 'example.org'
      },
      title: 'the haunting of haunted house',
      childrensBook: false,
      genre: 'scary'
    };

    const genrelessBookData = {
      author: {
        name: 'betty wright',
        url: 'example.org'
      },
      title: 'the unknown',
    };

    let bookFactory = new BookFactory();
    const author = new Author('betty wright', 'example.org');
    const scaryBook = bookFactory.generate('scary', author, 'the haunting of haunted house');
    const genrelessBook = bookFactory.generate(null, author, 'the unknown');

    test(JSON.stringify(scaryBook) === JSON.stringify(scaryBookData), `${desc}: Generated book deep equals example data.`);
    test(JSON.stringify(genrelessBook) === JSON.stringify(genrelessBookData), `${desc}: Generated book deep equals example data.`);
  })('Factory');

}());

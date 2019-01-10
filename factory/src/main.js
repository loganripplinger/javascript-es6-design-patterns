import test from './tressa';
import BookFactory from './factory';
import Author from './author';

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
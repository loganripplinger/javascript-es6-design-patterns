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

  class Invoker {
  	constructor(command) {
  		this.command = command;
  	}
  	execute() {
  		this.command.execute();
  	}
  }

  class Receiver {
    constructor() {
      this.rating = 0;
      this.likeCounter = 0;
      this.dislikeCounter = 0;
    }
    like() {
      this.rating += 1;
      this.likeCounter += 1;
    }
    superlike() {
      this.rating += 10;
      // super likes only count as ONE like
      this.likeCounter += 1;
    }
    dislike() {
      this.rating -= 1;
      this.dislikeCounter += 1;
    }
  }

  class Like {
    constructor(receiver) {
      this.receiver = receiver;
    }
    execute() {
      this.receiver.like();
    }
  }

  class SuperLike {
    constructor(receiver) {
      this.receiver = receiver;
    }
    execute() {
      this.receiver.superlike();
    }
  }

  class Dislike {
    constructor(receiver) {
      this.receiver = receiver;
    }
    execute() {
      this.receiver.dislike();
    }
  }

  ((desc) => {
    let picture = new Receiver();

    const likeCommand = new Like(picture);
    const likePicture = new Invoker(likeCommand);
    const superLikeCommand = new SuperLike(picture);
    const superLikePicture = new Invoker(superLikeCommand);
    const dislikeCommand = new Dislike(picture);
    const dislikePicture = new Invoker(dislikeCommand);
    
    test(picture.rating == 0, `${desc}: receiver (picture) begins with a rating of 0.`);

    likePicture.execute();
    test(picture.rating == 1, `${desc}: after like execution, receiver (picture) has a rating of 1.`);
    
    dislikePicture.execute();
    dislikePicture.execute();
    test(picture.rating == -1, `${desc}: after two dislike execution, receiver (picture) has a rating of -1.`);

    superLikePicture.execute();
    test(picture.rating == 9, `${desc}: after super like, receiver (picture) has rating of 9.`);
  })('Command');

}());

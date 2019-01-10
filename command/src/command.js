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

export { Invoker, Receiver, Like, Dislike, SuperLike };
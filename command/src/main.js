import test from './tressa.js';
import { 
  Invoker,
  Receiver, 
  Like, 
  Dislike, 
  SuperLike
} from './command';

((desc) => {
  let picture = new Receiver();
  const likeCommand = new Like(picture);
  const likeInvoker = new Invoker(likeCommand);
  test(picture.rating == 0, `${desc}: receiver (picture) begins with a rating of 0.`)

  likeInvoker.execute();
  test(picture.rating == 1, `${desc}: after like execution, receiver (picture) has a rating of 1.`)
  
  const dislikeCommand = new Dislike(picture);
  const dislikeInvoker = new Invoker(dislikeCommand);
  dislikeInvoker.execute();
  dislikeInvoker.execute();
  test(picture.rating == -1, `${desc}: after two dislike execution, receiver (picture) has a rating of -1.`)

  const superLikeCommand = new SuperLike(picture);
  const superLikeInvoker = new Invoker(superLikeCommand);
  superLikeInvoker.execute();
  test(picture.rating == 9, `${desc}: after super like, receiver (picture) has rating of 9.`)

  

})('Command');
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
  const likePicture = new Invoker(likeCommand);
  const superLikeCommand = new SuperLike(picture);
  const superLikePicture = new Invoker(superLikeCommand);
  const dislikeCommand = new Dislike(picture);
  const dislikePicture = new Invoker(dislikeCommand);
  
  test(picture.rating == 0, `${desc}: receiver (picture) begins with a rating of 0.`)

  likePicture.execute();
  test(picture.rating == 1, `${desc}: after like execution, receiver (picture) has a rating of 1.`)
  
  dislikePicture.execute();
  dislikePicture.execute();
  test(picture.rating == -1, `${desc}: after two dislike execution, receiver (picture) has a rating of -1.`)

  superLikePicture.execute();
  test(picture.rating == 9, `${desc}: after super like, receiver (picture) has rating of 9.`)
})('Command');
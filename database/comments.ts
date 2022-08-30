import { collection, query, where } from  'firebase/firestore'
import fireStore from './firebase'

const commentsRef = collection(fireStore, "comments");

const getData = (post: string) =>{
  const q = query(commentsRef, where("post", "==", post));
  return q;
}

export { commentsRef, getData };

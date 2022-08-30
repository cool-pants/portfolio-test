import { intializeApp } from "firebase/app";
import firebaseConfig from "./config";

const app = intializeApp(firebaseConfig)
const fireStore = app.fireStore()

export default fireStore;

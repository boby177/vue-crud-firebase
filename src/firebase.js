import firebase from "./firebase";
import { ref, onUnmounted } from "vue";

const config = {
  // Firebase config here
  apiKey: "AIzaSyABaHY3_7qiiFnd0poLSlst_ZSeNInjSco",
  authDomain: "vue-crud-firebase-bc617.firebaseapp.com",
  projectId: "vue-crud-firebase-bc617",
  storageBucket: "vue-crud-firebase-bc617.appspot.com",
  messagingSenderId: "661516668020",
  appId: "1:661516668020:web:643b881521160375c81521",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection("users");

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};

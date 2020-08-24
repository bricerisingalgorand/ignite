import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB6Tv01UcGbFvL92Il4JEwarv-hxB-f8G8",
  authDomain: "ignite-b054c.firebaseapp.com",
  databaseURL: "https://ignite-b054c.firebaseio.com",
  projectId: "ignite-b054c",
  storageBucket: "ignite-b054c.appspot.com",
  messagingSenderId: "289791199855",
  appId: "1:289791199855:web:0c3a026484d4bd076d1b9a"
};

firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

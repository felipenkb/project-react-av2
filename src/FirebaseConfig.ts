import * as firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDyAyhyHiQazcf53JzbmboK0ZgKof6I-Tw",
    authDomain: "project-react-av2.firebaseapp.com",
    projectId: "project-react-av2",
    storageBucket: "project-react-av2.appspot.com",
    messagingSenderId: "1002140344874",
    appId: "1:1002140344874:web:b1c35b0e1b1ce474f05953"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  
  export const auth = firebaseAuth.initializeAuth(app);

  
import firebase from 'firebase/app';
import'firebase/firestore';
import'firebase/auth';

const config = {
    apiKey: "AIzaSyCaQZhoZpapI8q6vistI_C_HSWZH6IjTEM",
    authDomain: "crwn-db-dd444.firebaseapp.com",
    projectId: "crwn-db-dd444",
    storageBucket: "crwn-db-dd444.appspot.com",
    messagingSenderId: "31948849339",
    appId: "1:31948849339:web:8101e5350d882391a9a99e",
    measurementId: "G-PJPVEG0BKW"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists) {
      const {displayName, email } = userAuth;
      const createdAt = new Date();
      console.log('User data', displayName, email, createdAt);

      try {

        await userRef.set({

          displayName, email, createdAt, ...additionalData

        });

        console.log('User added successfully !!', displayName, email);

      } catch(error){
        console.log('Error Creating user', error.message);
      }



    }

    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;



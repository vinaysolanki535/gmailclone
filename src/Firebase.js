import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCoDGIEAjofD2sVa7oOH-9BUm8q8pdUrmY',
  authDomain: 'clone-a2d90.firebaseapp.com',
  projectId: 'clone-a2d90',
  storageBucket: 'clone-a2d90.appspot.com',
  messagingSenderId: '156737875089',
  appId: '1:156737875089:web:32b976619854ec3610a330',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }

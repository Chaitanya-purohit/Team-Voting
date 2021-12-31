import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyCig52ZwU9nkYM-7NLkZFLdhXxEAQnxVkg",
  authDomain: "team-voting-app-91ec1.firebaseapp.com",
  projectId: "team-voting-app-91ec1",
  storageBucket: "team-voting-app-91ec1.appspot.com",
  messagingSenderId: "177508669362",
  appId: "1:177508669362:web:b1b20130d2b3091c06b6ab"
};
// Initialize Firebase
if(!firebase.apps.length){


firebase.initializeApp(firebaseConfig);
}
export default firebase.database();

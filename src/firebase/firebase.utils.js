import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
	apiKey: "AIzaSyBx7w9XVriVWAVBzKPXqaCjxCtvSZIKIn4",
	authDomain: "crwn-db-a0489.firebaseapp.com",
	databaseURL: "https://crwn-db-a0489.firebaseio.com",
	projectId: "crwn-db-a0489",
	storageBucket: "",
	messagingSenderId: "335495351220",
	appId: "1:335495351220:web:fffaabafb0bcf363"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
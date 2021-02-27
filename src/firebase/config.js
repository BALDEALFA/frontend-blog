import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyArRcOzPrvZ0C8sU9vgGGpF6O4-5ajX588",
	authDomain: "my-vue3-firebase-sites.firebaseapp.com",
	projectId: "my-vue3-firebase-sites",
	storageBucket: "my-vue3-firebase-sites.appspot.com",
	messagingSenderId: "1023593082687",
	appId: "1:1023593082687:web:1866fd0126e1f89434ad8a",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init firestore
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectFirestore, timestamp };

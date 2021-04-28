import firebase from "firebase/app";
import "firebase/firestore";

const settings = { timestampsInSnapshots: true };
const config = {
	apiKey: "AIzaSyCBxIL9S2xIGFCUq_c0qduSGFEZJMLv34Y",
	authDomain: "vue3-firebase-testing.firebaseapp.com",
	projectId: "vue3-firebase-testing",
	storageBucket: "vue3-firebase-testing.appspot.com",
	messagingSenderId: "117181060083",
	appId: "1:117181060083:web:e526e4ab5c4c39beeff886"
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;

import firebase from "firebase/app";
import "firebase/firestore";

const settings = { timestampsInSnapshots: true };
const config = {
	apiKey: "...your own data from firebase...",
	authDomain: "...your own data from firebase...",
	projectId: "...your own data from firebase...",
	storageBucket: "...your own data from firebase...",
	messagingSenderId: "...your own data from firebase...",
	appId: "...your own data from firebase..."
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;

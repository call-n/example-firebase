import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC87utLU93uTFRaXCLUVmEDLkn9JBl_px4",
    authDomain: "example-fac5e.firebaseapp.com",
    projectId: "example-fac5e",
    storageBucket: "example-fac5e.appspot.com",
    messagingSenderId: "1043671646322",
    appId: "1:1043671646322:web:ce7c55c505179e9e3242eb"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
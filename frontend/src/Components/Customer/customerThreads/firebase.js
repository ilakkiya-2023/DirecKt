import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1tcQWS05tHSIaWsGS733f-S3kIZ5QdD0",
  authDomain: "fileupload-50d69.firebaseapp.com",
  projectId: "fileupload-50d69",
  storageBucket: "fileupload-50d69.appspot.com",
  messagingSenderId: "524568518779",
  appId: "1:524568518779:web:e6f17150e1ce2097b9c2de"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
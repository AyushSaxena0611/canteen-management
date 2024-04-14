import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // this is for the normal database
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC89Kl3gTvbMhhhzfOt-nHn9YfeNZg_zL0",
  authDomain: "canteen-management-b5657.firebaseapp.com",
  projectId: "canteen-management-b5657",
  storageBucket: "canteen-management-b5657.appspot.com",
  messagingSenderId: "26256868244",
  appId: "1:26256868244:web:162aed310f4544d4014581"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
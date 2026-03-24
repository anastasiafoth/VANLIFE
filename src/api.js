import { initializeApp } from "firebase/app";
// firestore has an ability to get realtime data, so you can set up Listeners,
// to react to any changes in the database
// if you add "/lite" then. you can save some load time, this excludes the realtime features, but you can still use CRUD operations.
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyCc8lQyvhK9DNYfKDc8AhqVm1Nx28ndhQ0",
  authDomain: "vanlife-11e4b.firebaseapp.com",
  projectId: "vanlife-11e4b",
  storageBucket: "vanlife-11e4b.firebasestorage.app",
  messagingSenderId: "752552685950",
  appId: "1:752552685950:web:9f01f13d0abd15685d432f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const snapshot = await getDoc(docRef);
  const van = { ...snapshot.data(), id: snapshot.id };

  return van;
}

export async function getHostVans() {
  // since there is no real auth here, the hostId is hardcoded
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}

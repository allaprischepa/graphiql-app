import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import { SignInForm, SignUpForm } from '../types/forms';
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const userAuth = {
  registerWithEmailAndPassword: async (data: SignUpForm) => {
    const { name, email, password } = data;
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
    await updateProfile(user, {
      displayName: name,
    });
  },

  logInWithEmailAndPassword: async (data: SignInForm) => {
    const { email, password } = data;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential;
  },

  logOut: async () => {
    signOut(auth);
  },
};

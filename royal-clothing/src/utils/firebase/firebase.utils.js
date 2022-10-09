import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCFPvOYnoiHAfK4_OIuiQ2TWGQ_Cl1NTGk',
  authDomain: 'royal-clothing-96e51.firebaseapp.com',
  projectId: 'royal-clothing-96e51',
  storageBucket: 'royal-clothing-96e51.appspot.com',
  messagingSenderId: '1088940967368',
  appId: '1:1088940967368:web:1238932458674f71a6ecfd',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userId = user.uid; // This is the unique user ID

    // Save the userId in your database if needed
    console.log("User ID:", userId);
  } catch (error) {
    console.error("Error signing up:", error);
  }
}


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = await user.getIdToken(); // Get the current token

    console.log("Current Token:", token);
  } catch (error) {
    console.error("Error signing in:", error);
  }
}

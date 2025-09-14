import { signInWithPopup, signOut } from "firebase/auth";
import { auth ,provider } from "../Firebase";

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };
  } catch (err) {
    console.error("Google Sign-in failed", err);
    throw err;
  }
}

export async function logout() {
  return await signOut(auth);
}

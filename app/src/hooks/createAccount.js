import { setDoc, doc } from "firebase/firestore";
import { db } from "services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "services/firebase";

export const createUser = async (output, currentUser) => {
    
    const email = output.email;
    const password = output.password;
    const role = output.role;

    console.log(email, password, role)
    if (currentUser) {
      await setDoc(doc(db, "users", currentUser.uid), {
        uid: currentUser.uid,
        email: email,
        password: password,
        role: role,
      });
      console.log("Create user successfully");
    }
  };
  
export const createAccount = (output) => {
    createUserWithEmailAndPassword(auth, output.email, output.password)
      .then((userCredential) => {
        console.log(userCredential);
        createUser(output, userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };


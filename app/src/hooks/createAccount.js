import { setDoc, doc } from "firebase/firestore";
import { db } from "services/firebase";

export const createUser = async (output, currentUser) => {
    console.log("gogo");

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
  
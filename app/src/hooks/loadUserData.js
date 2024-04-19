import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
export const loadData = async (currentUser) => {
  const docRef = doc(db, 'users', currentUser.uid);
  const docSnap = await getDoc(docRef);
  console.log('Data: ', docSnap.data());
  console.log('Id: ', docSnap.data()?.uid);
  //   data return include ({
  //     name: docSnap.data()?.name,
  //     image: docSnap.data()?.image,
  //     email: docSnap.data()?.email,
  //     password: docSnap.data()?.password,
  //     role: docSnap.data()?.role
  //   });
  return {name: docSnap.data().name,
          role: docSnap.data().role,
          image: docSnap.data().image,
          email: docSnap.data().email
        };
          
};

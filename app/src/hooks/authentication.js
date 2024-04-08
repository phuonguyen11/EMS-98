import { auth } from '../../firebase';
export const logOut = () => {
  signOut(auth)
    .then(() => {
      navigate('/login');
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signIn = (e) => {
  e.preventDefault();
  // get email and password from form input
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('user data: ', userCredential);
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
    });
};

import { doc, updateDoc } from 'firebase/firestore';
import { db } from 'services/firebase';

export const setGrade = async (midleScore, finalScore, studentId, courseCode) => {
  console.log(typeof m);
  if (midleScore >= 0 && midleScore <= 10 && finalScore >= 0 && finalScore <= 10) {
    await updateDoc(doc(db, `users`, studentId), {
      [`listCourses.${courseCode}`]: {
        midterm: midleScore,
        final: finalScore,
        average: (finalScore + midleScore) / 2.0
      }
    });
    window.location.reload();
  } else {
    alert('Enter the score again');
  }
};

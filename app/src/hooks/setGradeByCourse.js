import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const setGrade = async (midleScore, finalScore, studentId, courseCode) => {
  if (midleScore >= 0 && midleScore <= 10 && finalScore >= 0 && finalScore <= 10) {
    await updateDoc(doc(db, `users`, studentId), {
      [`listCourses.${courseCode}`]: {
        midterm: midleScore,
        final: finalScore,
        average: (midleScore + finalScore) / 2
      }
    });
    window.location.reload();
  } else {
    alert('Enter the score again');
  }
};

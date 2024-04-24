import { doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export function checkDuplicateCourse(student, courseCode){
  for (let i of student?.listCourses){
      if (courseCode==i.courseCode) return false;
  }
  return true;
}

export function checkDuplicate(student, course,classID) {
  var tclassID=0;
  for (let k=0;k<course.classArray.length;k++){
      if (course.classArray[k].classID==classID) tclassID==k;
  }
  console.log(tclassID);
  for (let joinedClass of student.listCourses) {
      const index= course.classArray.findIndex(obj=>obj.classID==joinedClass.classID);
      const temp=course.classArray[index];
      if (temp.date == course.classArray[tclassID].date) {         
          if ((course.classArray[tclassID].startTime >= temp.startTime 
              && course.classArray[tclassID].startTime < temp.endTime) ||
              (course.classArray[tclassID].endTime > temp.startTime 
              && course.classArray[tclassID].endTime <= temp.endTime)||
          (course.classArray[tclassID].startTime>=temp.startTime
          &&course.classArray[tclassID].endTime<=temp.endTime)) {
              return false; 
          }
      }
  }
  return true; 
}
export async function courseSignin(courseCode,classID,uid){
  
  const studentRef =doc(db,"users",uid);
  const studentDoc= await getDoc(studentRef);
  const student=studentDoc.data();
  const courseRef=doc(db,"courses",courseCode);
  const courseDoc= await getDoc(courseRef);
  const course=courseDoc.data();
  
  if(!student?.isActive) {
      return {
        message: "student is not active!"
      };
  }
  
  if (checkDuplicate(student,course,classID)&&checkDuplicateCourse(student,courseCode)) {
      let courseSign={
          courseCode: courseCode,
          classID: classID
      }
      student.listCourses.push(courseSign);
      
      await updateDoc(
          studentRef, {
              listCourses: student.listCourses,
          }
      )
      .then(()=>{
          return {message: "Register Successfully!"};
      })
      .catch((error)=>{
          return {message: "Error: "+error}
      });
  }
  else if(!checkDuplicateCourse(student,courseCode)) return {message: "You have registered this course!"};
  else if(!checkDuplicate(student,course,classID)) return {message: "Time overlapped!"};
  else return{message: "Invalid registration!"};
}

export const registerCourse = async (courseCode, teacherId, studentId) => {
  await updateDoc(doc(db, 'courses', courseCode), {
    studentRegister: arrayUnion(studentId)
  });
  await updateDoc(doc(db, 'users', studentId), {
    [`listCourses.${courseCode}`]: {
      midterm: 0,
      final: 0,
      average: 0
    }
  });
  const teacherRef = doc(db, 'users', teacherId);
  const teacherDoc = await getDoc(teacherRef);
  if (teacherDoc.exists()) {
    const listStudents = teacherDoc.data().listStudents || {};
    const updatedListStudents = { ...listStudents };
    if (updatedListStudents[courseCode]) {
      updatedListStudents[courseCode] = [...updatedListStudents[courseCode], studentId];
    } else {
      updatedListStudents[courseCode] = [studentId];
    }
    await updateDoc(doc(db, 'users', teacherId), {
      listStudents: updatedListStudents
    });
  }
  alert('Registered successfully');
};

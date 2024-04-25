import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from 'services/firebase';
import { loadScheduleByStudent } from './loadScheduleByStudent';

export function checkDuplicateCourse(student, courseCode){
  const listCourses = student.listCourses;
  const courseIds = listCourses?Object.keys(listCourses).map((item) =>item):[]
  return courseIds?.includes(courseCode) === undefined
}

export const checkDuplicate = (course, classID, currentSchedule) => {

  //get new time
  const courseInfo = course.classArray?.filter((item) => item.classID === classID)[0];
  const newStartTime = courseInfo?.startTime;
  const newEndTime = courseInfo?.endTime;
  const newDate = courseInfo?.date;

  const sameDateClasses = currentSchedule.filter(item => item.date === newDate);

  const flag = sameDateClasses.map((item) => {
    if (
        ( (item.startTime >= newStartTime) && (item.startTime < newEndTime) ) ||
        ( (item.endTime > newStartTime) && (item.endTime <= newEndTime) ) ||
        ( (item.startTime < newStartTime) && (item.endTime > newEndTime) )
      )
    return false;

  return true;
  })
  return !flag.includes(false);
}

export const registerCourse = async (course, teacherId, student) => {
  const classID = course.classArray.filter(item => item.teacherID === teacherId)[0].classID;

  const listCourses = student.listCourses || {};
  const updatedListCourses = { ...listCourses };
  const courseCode = course.courseCode;

  updatedListCourses[courseCode] =  {
      'final': 0,
      'average': 0,
      'midterm': 0,
      'classID': classID,
  };

  await updateDoc(doc(db, 'users', student.uid), {
    listCourses: updatedListCourses
  });

  const teacherRef = doc(db, 'users', teacherId);
  const teacherDoc = await getDoc(teacherRef);
  if (teacherDoc.exists()) {
    const listStudents = teacherDoc.data().listStudents || {};
    const updatedListStudents = { ...listStudents };
    if (updatedListStudents[course.courseCode]) {
      updatedListStudents[course.courseCode] = [...updatedListStudents[course.courseCode], student.uid];
    } else {
      updatedListStudents[course.courseCode] = [student.uid];
    }
    await updateDoc(doc(db, 'users', teacherId), {
      listStudents: updatedListStudents
    });
  }
};

export const courseSignin = async(courseCode,classID,uid) => {
  
  const studentRef =doc(db,"users",uid);
  const studentDoc= await getDoc(studentRef);
  const student=studentDoc.data();
  const courseRef=doc(db,"courses",courseCode);
  const courseDoc= await getDoc(courseRef);
  const course=courseDoc.data();

  const currentSchedule = await loadScheduleByStudent(uid);
  const courseInfo = course.classArray.filter((item) => item.classID === classID)[0]

  if(!student?.isActive) {
      return {
        status: "error",
        message: "student is not active!"
      };
  }

  if (currentSchedule.length > 0 && !checkDuplicateCourse(uid, courseCode)) 
    return { status: "error", message: "You have registered this course!" };

  if (currentSchedule.length > 0 && !checkDuplicate(course, classID, currentSchedule)) 
    return { status: "error", message: "Time overlapped!" };

  console.log(courseCode, courseInfo.teacherID, uid);

  try {
    await registerCourse(course, courseInfo.teacherID, student);
    return { status: "success", message: "Register Successfully!" };
  } catch (error) {
    return { status: "error", message: "Error: " + error };
  }
}


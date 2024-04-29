import { setDoc, doc,getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import {loadScheduleByTeacher} from '../hooks/loadScheduleByTeacher'

export async function existCourse(courseCode){
  const courseRef=doc(db,"courses",courseCode);
  const courseDoc= await getDoc(courseRef);
  const course=courseDoc.data();
  return course!=undefined;
}

export const createCourse = async (courseCode,courseName,credit) => {
  if (await existCourse(courseCode)) return{status: "Error", message: "This course has existed!"};
  await setDoc(doc(db, 'courses', courseCode), {
    courseName: courseName,
    courseCode: courseCode,
    credit: credit,
    teacherIO: teacherID,
    studentReigister: [],
    classArray: [],
    courseDocuments:[]
  });
  return {status: "Success", message: "Create course successfully!"};
};

export async function checkDuplicateTeacherSchedule(date,startTime,endTime,teacherID){
  const schedule=loadScheduleByTeacher(teacherID);
  for (let Class of schedule){
    if (Class.date===date){
      if(endTime<=Class.endTime&&endTime>Class.startTime||
        startTime<Class.endTime&&startTime>=startTime) 
        return false;
    }
  }
  return true;
}

export const createClassForCourse=async(courseCode, date,startTime,endTime,teacherID)=>{
  if(checkDuplicateTeacherSchedule(date,startTime,endTime,teacherID)) return{status: "Error", message: "Time overlapped!"};
  const courseRef=doc(db,"courses",courseCode);
  const courseDoc= await getDoc(courseRef);
  const course=courseDoc.data();
  const Class=course.classArray;
  const nextClassIDnum=parseInt(Class[Class.length-1].classID[1])*10+parseInt(Class[Class.length-1].classID[2])+1;
  var   nextClassID="L";
  if (nextClassIDnum<10) nextClassID=nextClassID+0+nextClassIDnum;
  else nextClassID+=nextClassIDnum;
  const nextClass={
    classID: nextClassID,
    date: date,
    startTime:startTime,
    endTime:endTime,
    teacherID:teacherID
  }
  Class.push(nextClass);
  await setDoc(doc(db, 'courses', courseCode), {
    classArray: Class
  });
}

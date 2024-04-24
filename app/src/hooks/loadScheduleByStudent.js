import { doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const loadScheduleByStudent = async (studentID) => {
    const studentRef =doc(db,"users",studentID);
    const studentDoc= await getDoc(studentRef);
    const student=studentDoc.data();
    const store = [];
    for (let item of student.listCourses){
        const courseRef=doc(db,"courses",item.courseCode);
        const courseDoc= await getDoc(courseRef);
        const course=courseDoc.data();
        const classPos=course.classArray.findIndex(obj=>obj.classID==item.classID);
        const courseItem={
            courseCode: course.courseCode,
            courseName:course.courseName,
            classID: course.classArray[classPos].classID,
            date: course.classArray[classPos].date,
            startTime: course.classArray[classPos].startTime,
            endTime: course.classArray[classPos].endTime,
            teacherName: course.teacherName,
            credit: course.credit
        }
        store.push(courseItem);
    }
    return store;
};
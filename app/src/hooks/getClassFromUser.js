import { doc, getDoc } from 'firebase/firestore';
import { db } from 'services/firebase';
import { loadUserById } from './loadUserData';

const getClassFromUser = async (courseCode) => {
  const userId = localStorage.getItem('userId');
  let docRef = doc(db, 'users', userId);
  let docSnap = await getDoc(docRef);
  let studentClass = '';
  const allCourse = docSnap.data().listCourses;
  if (allCourse) {
    console.log(allCourse);
    for (const i of Object.entries(allCourse)) {
      if (i[0] === courseCode) {
        console.log(i);
        studentClass = i[1].classID;
        break;
      }
    }
  }
  docRef = doc(db, 'courses', courseCode);
  docSnap = await getDoc(docRef);
  let store = {};
  const classArray = docSnap.data().classArray;
  let teacherId = '';
  if (classArray) {
    for (const i of Object.entries(classArray)) {
      if (i[1].classID === studentClass) {
        console.log(i[1]);
        store = i[1];
        teacherId = i[1].teacherID;
      }
    }
  }
  docRef = doc(db, 'users', teacherId);
  docSnap = await getDoc(docRef);
  const teacher = docSnap.data()?.name;
  const listStudents = docSnap.data()?.listStudents;
  const listStudentsId = [];
  for (const i of Object.entries(listStudents)) {
    if (i[0] === courseCode) {
      listStudentsId.push(i[1]);
      break;
    }
  }
  console.log(listStudentsId);
  const studentList = [];
  for (const i of listStudentsId[0]) {
    console.log('id: ', i);
    const student = await loadUserById(i);
    console.log(student.name);
    studentList.push(student);
  }
  store['student'] = studentList;
  console.log('name: ', teacher);
  store['teacherName'] = teacher;
  return store;
};
export default getClassFromUser;

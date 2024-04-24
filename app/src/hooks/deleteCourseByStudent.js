import { doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export async function DeleteCourse(studentID,courseCode){
    const studentRef =doc(db,"users",studentID);
    const studentDoc= await getDoc(studentRef);
    const student=studentDoc.data();
    const courseRef=doc(db,"courses",courseCode);
    const courseDoc= await getDoc(courseRef);
    const course=courseDoc.data();
    const deleteIndex=student.listCourses.findIndex(obj=>obj.courseCode==courseCode);
    let n=student.listCourses.length;
    let a1=student.listCourses.slice(0,deleteIndex);
    let a2=[];
    if(deleteIndex<n-1) a2=student.listCourses.slice(deleteIndex+1,n);
    student.listCourses=a1.concat(a2);
    await updateDoc(
            studentRef, {
                listCourses: student.listCourses,
            }
        )
        .then(()=>{
            return {message: "Delete Successfully!"};
        })
        .catch((error)=>{
            return {message: "Error: "+error}
        });
}

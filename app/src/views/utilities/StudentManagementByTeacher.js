// project imports
import { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';
import { loadUserByRole } from 'hooks/loadUserByRole';
import { CircularProgress } from '@mui/material';
import { Button } from '@mui/material';
import StudentTableInTeacher from 'ui-component/table/StudentTableInTeacher';
import AddStudentDialog from 'ui-component/dialog/AddStudentDialog';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'services/firebase';
import { loadAllCourse } from 'hooks/loadAllCourse';

const StudentManagementByTeacher = () => {
    const [students, setStudents] = useState([]);
    const [courseCodes, setCourseCodes] = useState([]);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [listStudents, setListStudents] = useState([]);
    const [listCourses, setListCourses] = useState([]);
    const currentUserId = localStorage.getItem("userId");
    const fetchStudents = async () => {
        const studentList = await loadUserByRole("student");
        if (studentList) {
            setStudents(studentList);
        }
    }
    const fetchCourses = async () => {
        const listCourses = await loadAllCourse();
        if(listCourses) {
            setListCourses(listCourses);
        }
    }
    useEffect(() => {
        fetchStudents();
        fetchCourses();
    }, [])
    const getListStudent = async (currentUserId) => {
        const docRef = doc(db, 'users', currentUserId);
        const docSnap = await getDoc(docRef);
        const listStudentsData = await docSnap.data()?.listStudents;
        const resultMap = {};
        Object.keys(listStudentsData || []).forEach((courseCode) => {
            const studentIds = listStudentsData[courseCode];
            studentIds.forEach((studentId) => {
                const foundStudent = students.find((student) => student.uid === studentId);
                if (foundStudent) {
                    if (!resultMap[courseCode]) {
                        resultMap[courseCode] = [foundStudent];
                    } else {
                        resultMap[courseCode].push(foundStudent);
                    }
                }
            });
        });
        setListStudents(resultMap);
        setCourseCodes(Object.keys(resultMap));
    };
    const handleAddDialogOpen = () => setOpenAddDialog(true);
    const handleAddDialogClose = () => setOpenAddDialog(false);
    const handleOnclickLoadStudent = async () => {
        await getListStudent(currentUserId);
    }
    return (
        <MainCard title="Student Management" secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://tablericons.com/" />}>
            <Button
                color="info"
                onClick={handleOnclickLoadStudent}
                variant="contained"
            >
                Load Student
            </Button>
            {courseCodes.map(item => {
                return (
                    <>
                        {listCourses.map(course => {
                            if(course.courseCode == item) {
                                return (
                                    <h4 key={course.courseCode}>Couse name: {course.courseName}</h4>
                                )
                            }
                        })}
                        
                        {listStudents ? 
                        <StudentTableInTeacher 
                            data={listStudents[item]} 
                            openModalAddStudent={handleAddDialogOpen}
                            courseCode={item}
                        /> : <CircularProgress />}
                        <br /><br />
                    </>
                )
            })}
            <AddStudentDialog openAddDialog={openAddDialog} handleAddDialogClose={handleAddDialogClose} fetchStudents={fetchStudents} />

        </MainCard>
    )
};

export default StudentManagementByTeacher;

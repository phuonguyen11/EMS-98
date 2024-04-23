// project imports
import { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';
import { loadUserByRole } from 'hooks/loadUserByRole';
import { CircularProgress } from '@mui/material';

import StudentTableInTeacher from 'ui-component/table/StudentTableInTeacher';
import AddStudentDialog from 'ui-component/dialog/AddStudentDialog';
//import SetGradeDialog from 'ui-component/dialog/SetGradeDialog';
//import { loadAllCourse } from 'hooks/loadAllCourse';
import { Button } from '@mui/material';

import { db } from 'services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import SetGradeDialog from 'ui-component/dialog/SetGradeDialog';

const StudentManagement = () => {
    const [students, setStudents] = useState([]);
    const [courseCodes, setCourseCodes] = useState([]);
    //const [courses, setCourses] = useState([]);
    const [listStudents, setListStudents] = useState(null);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    //const [openSetGradeDialog, setOpenSetGradeDialog] = useState(flase);
    const currentUserId = localStorage.getItem('userId');
    const fetchStudents = async () => {
        const students = await loadUserByRole("student");
        if (students) {
            setStudents(students);
        }

    }
    useEffect(() => {
        fetchStudents();
        //handldleLoadStudentList(currentUserId);
    }, [])
    const getListStudent = async (currentUserId) => {
        const docRef = doc(db, 'users', currentUserId);
        const docSnap = await getDoc(docRef);
        const listStudentsData = await docSnap.data()?.listStudents;
        const resultMap = {};
        Object.keys(listStudentsData).forEach((courseCode) => {
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
    //const handleSetGradeDialogOpen = () => setOpenSetGradeDialog(true);
    //const handleSetGradeDialogClose = () => setOpenSetGradeDialog(false);
    const handldleLoadStudentList = (currentUserId) => {
        getListStudent(currentUserId);
    }

    return (
        <MainCard title="Student Management" secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://tablericons.com/" />}>
            {currentUserId && <Button
                color="info"
                onClick={() => handldleLoadStudentList(currentUserId)}
                variant="contained"
            >
                Load student list
            </Button>}

            {courseCodes.map(item => {
                return (
                    <>
                        {/* {fecthCourses(item)} */}
                        <h4>Couse name: {item}</h4>
                        {listStudents ? 
                        <StudentTableInTeacher 
                            data={listStudents[item]} 
                            openModalAddStudent={handleAddDialogOpen}
                        /> : <CircularProgress />}
                        <br /><br />
                    </>
                )
            })}

            <AddStudentDialog openAddDialog={openAddDialog} handleAddDialogClose={handleAddDialogClose} fetchStudents={fetchStudents}/>


        </MainCard>
    )
};

export default StudentManagement;

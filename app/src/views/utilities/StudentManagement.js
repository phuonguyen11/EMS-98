// project imports
import { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';
import { loadUserByRole } from 'hooks/loadUserByRole';
import { CircularProgress } from '@mui/material';
import StudentTable from 'ui-component/table/StudentTable';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async() => {
    const studentList = await loadUserByRole("student");
    if (studentList) {
      setStudents(studentList);
    }
  }
  useEffect(() =>{
    fetchStudents();
   },[])
  return (
  <MainCard title="Student Management" secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://tablericons.com/" />}>
    {students? <StudentTable data={students} />: <CircularProgress/>}
  </MainCard>
)};

export default StudentManagement;

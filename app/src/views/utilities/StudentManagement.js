// project imports
import { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';
import { loadUserByRole } from 'hooks/loadUserByRole';
import { CircularProgress } from '@mui/material';
import StudentTable from 'ui-component/StudentTable';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);

  useEffect(async() => {
    const studentList = await loadUserByRole("student");
    if (studentList) {
      setStudents(studentList);
    }
  }, []);


  return (
  <MainCard title="Student Management" secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://tablericons.com/" />}>
    {students? <StudentTable data={students} />: <CircularProgress/>}
  </MainCard>
)};

export default StudentManagement;

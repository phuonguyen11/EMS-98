import { useState, useEffect } from 'react';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';
import TeacherTable from 'ui-component/table/TeacherTable';
import { loadUserByRole } from 'hooks/loadUserByRole';
import { CircularProgress } from '@mui/material';

const TeacherManagement = () => {
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async() => {
    const teacherList = await loadUserByRole("teacher");
    if (teacherList) {
      setTeachers(teacherList);
    }
  }
  useEffect(() =>{
    fetchTeachers();
   },[])
   
  return (
    <MainCard title="Teacher Management" secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://tablericons.com/" />}>
      {teachers? <TeacherTable data={teachers} />: <CircularProgress/>}
    </MainCard>
  )};

export default TeacherManagement;

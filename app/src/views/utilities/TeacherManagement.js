// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';
import Table from 'ui-component/Table';


// =============================|| TABLER ICONS ||============================= //


const TeacherManagement = () => (
  <MainCard title="Teacher Management" secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://tablericons.com/" />}>
    <Table/>
  </MainCard>
);

export default TeacherManagement;

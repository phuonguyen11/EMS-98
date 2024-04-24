import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from 'material-react-table';

import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  lighten,
} from '@mui/material';
//import { updateStudentDetail } from 'hooks/updateProfileData';
import toast, {Toaster} from 'react-hot-toast';
import { setGrade } from 'hooks/setGradeByCourse';

//Icons Imports
import { AccountCircle, Send } from '@mui/icons-material';
// import PropTypes from 'prop-types'
import { userIcon } from 'ui-component/icons';
import { updateActiveStatus } from 'hooks/updateProfileData';
//import { setGrade } from 'hooks/setGradeByCourse';

const Table = ({data,openModal,courseCode}) => {
  const columns = useMemo(
    () => [
      {
        id: 'student', //id used to define `group` column
        header: 'Student' ,
        columns: [
          {
            accessorFn: (row) => `${row.name}`, //accessorFn used to join multiple data into a single cell
            id: 'name', //id is still required when using accessorFn instead of accessorKey
            header: 'Name',
            enableEditing: false,
            size: 250,
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
              <div style={{width: '30px', height: '30px', objectFit: 'contain', borderRadius: '50%' }}>
                <img
                  alt="avatar"
                  width={'100%'}
                  height={'100%'}
                  src={row.original.image? row.original.image : userIcon}
                  loading="lazy"
                  style={{borderRadius: '50%'}}
                />
              </div>
                {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            enableEditing: false,
            filterVariant: 'autocomplete',
            header: 'Email',
            size: 300,
          },
        ],
      },
      {
        id: 'id',
        header: 'Academic Information',
        columns: [
          {
            accessorKey: 'midtermScore',
            enableHiding: true,
            enableEditing: true,
            header: 'Midterm Score',
            size: 200,
            Cell: ({ cell }) => (
              <Box
                component="span"
                sx={(theme) => ({
                  backgroundColor:
                    cell.getValue() < 5.0
                      ? theme.palette.error.dark
                      : cell.getValue() >= 5.0 && cell.getValue() < 8.0
                        ? theme.palette.warning.dark
                        : theme.palette.success.dark,
                  borderRadius: '0.25rem',
                  color: '#fff',
                  maxWidth: '9ch',
                  p: '0.25rem',
                })}
              >
                {cell.getValue()?.toLocaleString?.('en-US', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })
                }
              </Box>
            ),
          },
          {
            accessorKey: 'finalScore',
            enableHiding: true,
            enableEditing: true,
            header: 'Final Score',
            size: 200,
            Cell: ({ cell }) => (
              <Box
                component="span"
                sx={(theme) => ({
                  backgroundColor:
                    cell.getValue() < 5.0
                      ? theme.palette.error.dark
                      : cell.getValue() >= 5.0 && cell.getValue() < 8.0
                        ? theme.palette.warning.dark
                        : theme.palette.success.dark,
                  borderRadius: '0.25rem',
                  color: '#fff',
                  maxWidth: '9ch',
                  p: '0.25rem',
                })}
              >
                {cell.getValue()?.toLocaleString?.('en-US', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })
                }
              </Box>
            ),
          },
          {
            accessorKey: 'avergeScore',
            enableHiding: true,
            enableEditing: false,
            header: 'Average Score',
            size: 200,
            Cell: ({ cell }) => (
              <Box
                component="span"
                sx={(theme) => ({
                  backgroundColor:
                    cell.getValue() < 5.0
                      ? theme.palette.error.dark
                      : cell.getValue() >= 5.0 && cell.getValue() < 8.0
                        ? theme.palette.warning.dark
                        : theme.palette.success.dark,
                  borderRadius: '0.25rem',
                  color: '#fff',
                  maxWidth: '9ch',
                  p: '0.25rem',
                })}
              >
                {cell.getValue()?.toLocaleString?.('en-US', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })
                }
              </Box>
            ),
          },
          {
            accessorKey: 'uid', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            enableEditing: false,
            filterVariant: 'autocomplete',
            header: 'Student ID',
            size: 300,
          },
        ],
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableEditing: true,
    editDisplayMode: 'modal', //default
    onEditingRowSave: async({ table, values }) => {
      //validate data
      //save data to api
      const f = parseFloat(values?.finalScore);
      const m = parseFloat(values?.midtermScore);
      await setGrade(m, f, values?.uid, courseCode);
      table.setEditingRow(null); //exit editing mode
    },
    onEditingRowCancel: () => {
      //clear any validation errors
    },
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
      columnPinning: {
        left: ['mrt-row-expand', 'mrt-row-select'],
        right: ['mrt-row-actions'],
      },
    },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    muiSearchTextFieldProps: {
      size: 'small',
      variant: 'outlined',
    },
    muiPaginationProps: {
      color: 'secondary',
      rowsPerPageOptions: [10, 20, 30],
      shape: 'rounded',
      variant: 'outlined',
    },
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-around',
          left: '30px',
          maxWidth: '1000px',
          position: 'sticky',
          width: '100%',
        }}
      >
      <div style={{width: '150px', height: '150px', objectFit: 'contain', borderRadius: '50%' }}>
        <img
          alt="avatar"
          width='100%'
          height='100%'
          src={row.original.image?row.original.image : userIcon}
          loading="lazy"
          style={{ borderRadius: '50%'}}
        />
      </div>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4">Department:</Typography>
          <Typography variant="h1">
            {row.original.department}
          </Typography>
        </Box>
      </Box>
    ),
    renderRowActionMenuItems: ({ closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          // View profile logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        View Profile
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          // Send email logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Send />
        </ListItemIcon>
        Send Email
      </MenuItem>,
    ],
    renderTopToolbar: ({ table }) => {
      const handleDeactivate = async() => {
        table.getSelectedRowModel().flatRows.map((row) => {
          updateActiveStatus(row.getValue('email'), false)
          toast.success('Deactivating ' + row.getValue('name'));
        });
      };

      const handleActivate = async() => {
        table.getSelectedRowModel().flatRows.map((row) => {
          updateActiveStatus(row.getValue('email'), true)
          toast.success('Activating ' + row.getValue('name'));
        });
      };
          
      return (
        <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: 'flex',
            gap: '0.5rem',
            p: '8px',
            justifyContent: 'space-between',
          })}
        >
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {/* import MRT sub-components */}
            <MRT_GlobalFilterTextField table={table} />
            <MRT_ToggleFiltersButton table={table} />
          </Box>
          <Box>
            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
              <Button
                color="error"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleDeactivate}
                variant="contained"
              >
                Deactivate
              </Button>
              <Button
                color="success"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleActivate}
                variant="contained"
              >
                Activate
              </Button>
              <Button
                color="info"
                onClick={openModal}
                variant="contained"
              >
                Add New Student Account
              </Button>
            </Box>
          </Box>
        </Box>
      );
    },
  });

  return <MaterialReactTable table={table} />;
};

//Date Picker Imports - these should just be in your Context Provider
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


const StudentTable = ({data, openModal, courseCode}) => {
  //App.tsx or AppProviders file
  console.log(courseCode)
  let newData = [];
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {data.map(item => {

        const m = item?.listCourses?.[courseCode]?.midterm || 0;
        const f = item?.listCourses?.[courseCode]?.final || 0;
        const a = (m+f)/2;
        const uid = item?.uid;
        const temp = {
          ...item,
          courseId: courseCode,
          uid: uid,
          midtermScore: m,
          finalScore: f,
          avergeScore: a,
        }
        newData.push(temp);
      })}
      <div><Toaster position='top-right'/></div>
      <Table data={newData} openModal={openModal} courseCode={courseCode}  />
    </LocalizationProvider>
  )
}

export default StudentTable;

// Table.propTypes = {
//   data: PropTypes.any,
// };

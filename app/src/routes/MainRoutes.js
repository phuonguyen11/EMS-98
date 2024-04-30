import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';

import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const StudentManagement = Loadable(lazy(() => import('views/utilities/StudentManagement')));
const TeacherManagement = Loadable(lazy(() => import('views/utilities/TeacherManagement')));
const StudentManagementByTeacher = Loadable(lazy(() => import('views/utilities/Grading')));
const StudentTranscript = Loadable(lazy(() => import('views/utilities/StudentTranscript')));
const CoursesSite = Loadable(lazy(() => import('views/utilities/CoursesSite')));
const CourseDetail = Loadable(lazy(() => import('views/utilities/CourseDetail')));

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
// Account Settings routing
const AccountSettings = Loadable(lazy(() => import('views/pages/authentication/account-settings/Settings')));
// ==============================|| MAIN ROUTING ||============================== //
const userId = localStorage.getItem('userId');
const role = localStorage.getItem('role');
const MainRoutes = {
  path: '/',
  element: userId === null ? <MinimalLayout /> : <MainLayout />,
  children: [
    {
      path: '/',
      element: userId === null ? <AuthLogin3 /> : <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: userId === null ? <AuthLogin3 /> : <DashboardDefault />
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'student-management',
          element: userId === null || role !== 'admin' ? <AuthLogin3 requiredRole="Admin" /> : <StudentManagement />
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'teacher-management',
          element: userId === null || role !== 'admin' ? <AuthLogin3 requiredRole="Admin" /> : <TeacherManagement />
        }
      ]
    },
    {
      path: 'teacher',
      children: [
        {
          path: 'grading',
          element: userId === null || role !== 'teacher' ? <AuthLogin3 requiredRole="Teacher" /> : <StudentManagementByTeacher />
        },
        {
          path: 'courses-site',
          element:
            userId === null || role !== 'teacher' ? (
              <AuthLogin3 requiredRole="Teacher" />
            ) : (
              <CoursesSite currentRole="teacher" uid={userId} />
            )
        }
      ]
    },
    {
      path: 'student',
      children: [
        {
          path: 'student-transcript',
          element: userId === null || role !== 'student' ? <AuthLogin3 requiredRole="Student" /> : <StudentTranscript />
        },
        {
          path: 'courses-site',
          element:
            userId === null || role !== 'student' ? (
              <AuthLogin3 requiredRole="Student" />
            ) : (
              <CoursesSite currentRole="student" uid={userId} />
            )
        },
        {
          path: 'courses-site/:courseCode',
          element: <CourseDetail />
        }
      ]
    },
    {
      path: 'account-settings',
      element: userId === null ? <AuthLogin3 /> : <AccountSettings />
    }
  ]
};

export default MainRoutes;

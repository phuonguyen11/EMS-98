// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconBrandSuperhuman } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconBrandSuperhuman
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'admin',
      title: 'Administration',
      type: 'collapse',
      icon: icons.IconBrandSuperhuman,
      children: [
        {
          id: 'student-management',
          title: 'Student Management',
          type: 'item',
          url: 'admin/student-management',
          breadcrumbs: false
        },
        {
          id: 'teacher-management',
          title: 'Teacher Management',
          type: 'item',
          url: 'admin/teacher-management',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.IconShadow,
      breadcrumbs: false
    }
  ]
};

export default utilities;

// assets
import { IconKey } from '@tabler/icons-react';
import { IconBrandSuperhuman } from '@tabler/icons-react';
// constant
const icons = {
  IconKey,
  IconBrandSuperhuman
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.IconKey,
      children: [
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'change-password',
          title: 'Change Password',
          type: 'item',
          url: '/pages/change-password',
          target: true
        }

      ]
    },
  ]
};

export default pages;

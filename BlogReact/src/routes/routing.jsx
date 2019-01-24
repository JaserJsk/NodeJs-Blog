/*--------------------------------------------------------------------------------*/
/*                                    Imports                                     */
/*--------------------------------------------------------------------------------*/
import AuthRoutes from './authroutes.jsx';
import PageRoutes from './utils/pageroutes.jsx';
import FormRoutes from './utils/formroutes';
import IconRoutes from './utils/iconroutes.jsx';

import FirstDashboard from '../views/dashboards/dashboard1.jsx';
import Cards from '../views/ui-components/cards.jsx';

/*--------------------------------------------------------------------------------*/
/*                                   Routes                                       */
/*--------------------------------------------------------------------------------*/
var auths = [].concat(AuthRoutes);

var pages = [].concat(PageRoutes);

var forms = [].concat(FormRoutes);

var icons = [].concat(IconRoutes);

var ThemeRoutes = [

    {
        path: '/dashboards/dashboard1',
        name: 'Dashboard',
        icon: 'mdi mdi-adjust',
        component: FirstDashboard
    },

    {
        path: '/ui-components/card',
        name: 'Feeds',
        icon: 'mdi mdi-credit-card-multiple',
        component: Cards
    },

    {
        collapse: true,
        path: '/utils',
        name: 'Utils',
        state: 'openUtils',
        icon: 'mdi mdi-settings',
        child: [
            {
                collapse: true,
                name: 'Authentication',
                state: 'openAuthentication',
                icon: 'mdi mdi-account-circle',
                subchild: auths
            },
            {
                collapse: true,
                name: 'Pages',
                state: 'openPages',
                icon: 'mdi mdi-page-layout-footer',
                subchild: pages
            },
            {
                collapse: true,
                name: 'Forms',
                state: 'openForms',
                icon: 'mdi mdi-format-line-style',
                subchild: forms
            },
            {
                collapse: true,
                name: 'Material Icons',
                state: 'openIcons',
                icon: 'mdi mdi-emoticon',
                subchild: icons
            },
            
        ]
    },
    
    /*--------------------------------------------------------------------------------*/
    /*                                Root Path                                       */
    /*--------------------------------------------------------------------------------*/
    {
        path: '/',
        pathTo: '/dashboards/dashboard1',
        name: 'Dashboard',
        redirect: true
    }
    
];
export default ThemeRoutes;

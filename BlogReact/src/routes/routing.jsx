/*--------------------------------------------------------------------------------*/
/*                                    Imports                                     */
/*--------------------------------------------------------------------------------*/
import FirstDashboard from '../views/dashboards/dashboard1.jsx';
import Cards from '../views/ui-components/cards.jsx';
import Basicform from '../views/form-layouts/basic.jsx';
import FormInputs from '../views/form-layouts/form-inputs.jsx';
import FormGroups from '../views/form-layouts/form-groups.jsx';
import FormGrids from '../views/form-layouts/form-grids.jsx';
import MaterialForm from '../views/form-layouts/material.jsx';
import Datepicker from '../views/form-pickers/datetimepicker.jsx';
import Tagselect from '../views/form-pickers/tag-select.jsx'; 
import AuthRoutes from './authroutes.jsx';
import Starterkit from '../views/sample-pages/starter-kit.jsx';
import Profile from '../views/sample-pages/profile.jsx';
import Searchresult from '../views/sample-pages/search-result.jsx';
import Gallery from '../views/sample-pages/gallery.jsx';
import Helperclass from '../views/sample-pages/helperclass.jsx';
import Themify from '../views/icons/themify.jsx';
import Weather from '../views/icons/weather.jsx';
import Materialicon from '../views/icons/material.jsx';
import FontAwesome from '../views/icons/fontawesome.jsx';
import Simpleline from '../views/icons/simpleline.jsx';
import FlagIcon from '../views/icons/flag.jsx';

/*--------------------------------------------------------------------------------*/
/*                                   Routes                                       */
/*--------------------------------------------------------------------------------*/
var auths = [].concat(AuthRoutes);

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
        navlabel: true,
        name: 'Forms',
        icon: 'mdi mdi-dots-horizontal'
    },
    {
        collapse: true,
        path: '/forms',
        name: 'Forms',
        state: 'openApps',
        icon: 'mdi mdi-file',
        extra: '',
        child: [
            {
                collapse: true,
                path: '/forms/form-layouts',
                name: 'Form Layouts',
                state: 'formlayoutPages',
                icon: 'mdi mdi-arrange-bring-forward',
                subchild: [
                    {
                        path: '/forms/form-layouts/form-inputs',
                        name: 'Form Inputs',
                        icon: 'mdi mdi-priority-low',
                        component: FormInputs
                    },
                    {
                        path: '/forms/form-layouts/form-groups',
                        name: 'Form Groups',
                        icon: 'mdi mdi-rounded-corner',
                        component: FormGroups
                    },
                    {
                        path: '/forms/form-layouts/form-grids',
                        name: 'Form Grids',
                        icon: 'mdi mdi-select-all',
                        component: FormGrids
                    },
                    {
                        path: '/forms/form-layouts/basic',
                        name: 'Form Basic',
                        icon: 'mdi mdi-book',
                        component: Basicform
                    },
                    {
                        path: '/forms/form-layouts/material',
                        name: 'Form Material',
                        icon: 'mdi mdi-cards-outline',
                        component: MaterialForm
                    }
                ]
            },

            {
                collapse: true,
                path: '/forms/form-pickers',
                name: 'Form Pickers',
                state: 'formpickerPages',
                icon: 'mdi mdi-pencil-box-outline',
                subchild: [
                    {
                        path: '/forms/form-pickers/datetimepicker',
                        name: 'Date Pickers',
                        icon: 'mdi mdi-calendar-clock',
                        component: Datepicker
                    },
                    {
                        path: '/forms/form-pickers/tag-select',
                        name: 'Tags & Select',
                        icon: 'mdi mdi-tag-multiple',
                        component: Tagselect
                    }
                ]
            }
        ]
    },

    {
        navlabel: true,
        name: 'Sample Pages',
        icon: 'mdi mdi-dots-horizontal'
    },
    {
        collapse: true,
        path: '/sample-pages',
        name: 'Pages',
        state: 'openApps',
        icon: 'mdi mdi-book-open-variant',
        extra: '',
        child: [
            {
                collapse: true,
                name: 'Authentication',
                state: 'openAuthentication',
                icon: 'mdi mdi-account-circle',
                subchild: auths
            },
            {
                path: '/sample-pages/starter-kit',
                name: 'Starter Kit',
                icon: 'mdi mdi-crop-free',
                component: Starterkit
            },
            {
                path: '/sample-pages/profile',
                name: 'Profile',
                icon: 'mdi mdi-account-network',
                component: Profile
            },
            {
                path: '/sample-pages/search-result',
                name: 'Search Result',
                icon: 'mdi mdi-search-web',
                component: Searchresult
            },
            {
                path: '/sample-pages/gallery',
                name: 'Gallery',
                icon: 'mdi mdi-camera-iris',
                component: Gallery
            },
            {
                path: '/sample-pages/helperclass',
                name: 'Helper Classes',
                icon: 'mdi mdi-tune',
                component: Helperclass
            }
        ]
    },

    {
        collapse: true,
        path: '/extra/icons',
        name: 'Icons',
        state: 'iconsPages',
        icon: 'mdi mdi-face',
        child: [
            {
                path: '/extra/icons/material',
                name: 'Material Icons',
                icon: 'mdi mdi-emoticon',
                component: Materialicon
            },
            {
                path: '/extra/icons/fontawesome',
                name: 'Font Awesome Icons',
                icon: 'mdi mdi-emoticon-cool',
                component: FontAwesome
            },
            {
                path: '/extra/icons/themify',
                name: 'Themify Icons',
                icon: 'mdi mdi-chart-bubble',
                component: Themify
            },
            {
                path: '/extra/icons/weather',
                name: 'Weather Icons',
                icon: 'mdi mdi-weather-cloudy',
                component: Weather
            },
            {
                path: '/extra/icons/simpleline',
                name: 'Simple Line Icons',
                icon: 'mdi mdi mdi-image-broken-variant',
                component: Simpleline
            },
            {
                path: '/extra/icons/flag',
                name: 'Flag Icons',
                icon: 'mdi mdi-flag-triangle',
                component: FlagIcon
            }
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

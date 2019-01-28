import AuthRoutes from './authroutes.jsx';

import Feed from '../views/feed/feed.js';
import Single from '../views/feed/single/single.js';

var auths = [].concat(AuthRoutes);

var ThemeRoutes = [
    {
        navlabel: true,
        name: "Personal",
        icon: "mdi mdi-dots-horizontal",
    },

    {
        path: '/feed',
        name: 'Feed',
        icon: 'mdi mdi-rss',
        component: Feed
    },

    {
        path: '/single',
        name: 'Single',
        icon: 'mdi mdi-table-edit',
        component: Single
    },

    {
        collapse: true,
        path: '/auth',
        name: 'Authentication',
        state: 'openAuthentication',
        icon: 'mdi mdi-settings',
        child: [
            {
                collapse: true,
                name: 'Authentication',
                state: 'openAuthentication',
                icon: 'mdi mdi-account-circle',
                subchild: auths
            },
        ]
    },

    { 
        path: '/', 
        pathTo: '/feed', 
        name: 'Feed', 
        redirect: true 
    }
];

export default ThemeRoutes;

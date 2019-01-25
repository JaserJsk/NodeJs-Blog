import Start from '../views/start/index.jsx';

var ThemeRoutes = [
    {
        navlabel: true,
        name: "Personal",
        icon: "mdi mdi-dots-horizontal",
    },
    {
        path: '/start',
        name: 'Strart',
        icon: 'ti-dashboard',
        component: Start
    },
    { 
        path: '/', 
        pathTo: '/start', 
        name: 'Start', 
        redirect: true 
    }
];

export default ThemeRoutes;

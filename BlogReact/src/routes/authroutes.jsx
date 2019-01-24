import Login2 from '../views/authentication/login2.jsx';
import Register2 from '../views/authentication/register2.jsx';
import Recoverpwd from '../views/authentication/recover-pwd.jsx';
import Maintanance from '../views/authentication/maintanance.jsx';

var authRoutes = [
    { 
        path: '/authentication/login2', 
        name: 'Login with Firebase', 
        icon: 'mdi mdi-account-key', 
        component: Login2 
    },
    { 
        path: '/authentication/register2', 
        name: 'Register with Firebase', 
        icon: 'mdi mdi-account-plus', 
        component: Register2 
    },
    { 
        path: '/authentication/recover-pwd', 
        name: 'Recover Password', 
        icon: 'mdi mdi-account-convert', 
        component: Recoverpwd 
    },
    { 
        path: '/authentication/maintanance', 
        name: 'Maintanance', 
        icon: 'mdi mdi-pencil-box-outline', 
        component: Maintanance 
    }
];
export default authRoutes; 
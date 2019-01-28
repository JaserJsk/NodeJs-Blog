import Login from '../views/auth/login.js';
import Signup from '../views/auth/signup.js';

var authRoutes = [
    { 
        path: '/auth/login', 
        name: 'Login', 
        icon: 'mdi mdi-account-key', 
        component: Login 
    },
    { 
        path: '/Signup/signup', 
        name: 'Signup', 
        icon: 'mdi mdi-account-plus', 
        component: Signup 
    },
];
export default authRoutes; 
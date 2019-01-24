import Materialicon from '../../views/icons/material.jsx';
import FontAwesome from '../../views/icons/fontawesome.jsx';
import Themify from '../../views/icons/themify.jsx';
import Weather from '../../views/icons/weather.jsx';
import Simpleline from '../../views/icons/simpleline.jsx';
import FlagIcon from '../../views/icons/flag.jsx';

var IconRoutes = [
    { 
        path: '/icons/material',
        name: 'Material Icons',
        icon: 'mdi mdi-emoticon',
        component: Materialicon 
    },
    { 
        path: '/icons/fontawesome',
        name: 'Font Awesome Icons',
        icon: 'mdi mdi-emoticon-cool',
        component: FontAwesome 
    },
    { 
        path: '/icons/themify',
        name: 'Themify Icons',
        icon: 'mdi mdi-chart-bubble',
        component: Themify 
    },
    { 
        path: '/icons/weather',
        name: 'Weather Icons',
        icon: 'mdi mdi-weather-cloudy',
        component: Weather 
    },
    {
        path: '/icons/simpleline',
        name: 'Simple Line Icons',
        icon: 'mdi mdi mdi-image-broken-variant',
        component: Simpleline
    },
    {
        path: '/icons/flag',
        name: 'Flag Icons',
        icon: 'mdi mdi-flag-triangle',
        component: FlagIcon
    }
];

export default IconRoutes; 
import Profile from '../../views/sample-pages/profile.jsx';
import Gallery from '../../views/sample-pages/gallery.jsx';
import Helperclass from '../../views/sample-pages/helperclass.jsx';

var PageRoutes = [
    {
        path: '/sample-pages/profile',
        name: 'Profile',
        icon: 'mdi mdi-account-network',
        component: Profile
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
    },
];

export default PageRoutes; 
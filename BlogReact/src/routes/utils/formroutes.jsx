import Basicform from '../../views/form-layouts/basic.jsx';
import FormInputs from '../../views/form-layouts/form-inputs.jsx';
import FormGroups from '../../views/form-layouts/form-groups.jsx';
import FormGrids from '../../views/form-layouts/form-grids.jsx';
import MaterialForm from '../../views/form-layouts/material.jsx';
import Datepicker from '../../views/form-pickers/datetimepicker.jsx';
import Tagselect from '../../views/form-pickers/tag-select.jsx'; 

var FormRoutes = [
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
];

export default FormRoutes; 
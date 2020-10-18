import Vue from 'vue'
import VueRouter from 'vue-router'

import ManagementSystem from '../pages/Dashboard.vue'
import Login from '../pages/Login.vue'
import NotFound from '../pages/NotFound.vue'
import StaffList from '../views/admin/StaffList.vue'
import adminProfile from '../views/admin/admin_Profile.vue'
import createNewStaff from '../views/admin/createNewStaff---Test.vue'
import TrainerList from '../views/staff/TrainerList.vue'
import TraineeList from '../views/staff/TraineeList.vue'
import HomePage from '../views/HomePage.vue'
import Setting from '../views/Setting.vue'
import Topic from '../views/staff/Topics.vue'
import Course from '../views/staff/Courses.vue'
import Category from '../views/staff/Categories.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        alias: '/ManagementSystem',
        redirect: '/Home-page',
        name: 'ManagementSystem',
        component: ManagementSystem,
        meta: {
            title: 'Dashboard - EduManagementSystem'
        },
        children: [{
                path: 'Home-page',
                name: 'HomePage',
                component: HomePage,
                meta: {
                    title: 'HomePage - EduManagementSystem'
                }
            },
            {
                path: 'Staff-list',
                name: 'StaffList',
                component: StaffList,
                meta: {
                    title: 'StaffList - EduManagementSystem'
                }
            },
            {
                path: 'Trainer-list',
                name: 'TrainerList',
                component: TrainerList,
                meta: {
                    title: 'TrainerList - EduManagementSystem'
                }
            },
            {
                path: 'Trainee-list',
                name: 'TraineeList',
                component: TraineeList,
                meta: {
                    title: 'TraineeList - EduManagementSystem'
                }
            },
            {
                path: 'setting',
                name: 'Setting',
                component: Setting,
                meta: {
                    title: 'Setting - EduManagementSystem'
                }
            },
            {
                path: 'createNew_Staff',
                name: 'createNew_Staff',
                component: createNewStaff,
                meta: {
                    title: 'createNewStaff'
                }
            },
            {
                path: 'Topic',
                name: 'Topic',
                component: Topic,
                meta: {
                    title: 'Topic'
                }
            },
            {
                path: 'Course',
                name: 'Course',
                component: Course,
                meta: {
                    title: 'Course'
                }
            },
            {
                path: 'Category',
                name: 'Category',
                component: Category,
                meta: {
                    title: 'Category'
                }
            },
            {
                path: 'adminProfile',
                name: 'adminProfile',
                component: adminProfile,
                meta: {
                    title: 'adminProfile'
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login - EduManagementSystem'
        }
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '404 - Page Not Found'
        }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {

    if (to.meta.title) {
        document.title = to.meta.title;
    }

    next();

});

export default router
import Vue from "vue";
import VueRouter from "vue-router";

// import ManagementSystem from '../pages/Dashboard.vue'
import adminDashboard from "../views/admin/admin_dashboard.vue";
import staffDashboard from "../views/staff/staff_dashboard.vue";
import traineeDashboard from "../views/trainee/trainee_dashboard.vue";
import trainerDashboard from "../views/trainer/trainer_dashboard.vue";
import Login from "../pages/Login.vue";
import NotFound from "../pages/NotFound.vue";
import StaffList from "../views/admin/StaffList.vue";
import adminProfile from "../views/admin/admin_Profile.vue";
import editAdminProfile from "../views/admin/admin_editProfile.vue"
import staffProfile from "../views/staff/StaffProfile.vue";
import traineeProfile from "../views/trainee/trainee_Profile.vue";
import trainerProfile from "../views/trainer/trainer_Profile.vue";
import TrainerList_staff from "../views/staff/TrainerList.vue";
import TraineeList_staff from "../views/staff/TraineeList.vue";
import TrainerList_admin from "../views/admin/TrainerList.vue";
import TraineeList_admin from "../views/admin/TraineeList.vue";
import HomePage from "../views/HomePage.vue";
import Setting from "../views/Setting.vue";
import Topic from "../views/staff/Topics.vue";
import Course from "../views/staff/Courses.vue";
import Category from "../views/staff/Categories.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: HomePage,
        name: "HomePage",
        meta: {
            title: "Dashboard - EduManagementSystem",
        },
    },

    //=================================admin=================================
    {
        path: "/admin",
        redirect: { name: "adminProfile" },
        name: "adminHomePage",
        component: adminDashboard,
        // beforeEnter: (to, from, next) => {
        //     const role = sessionStorage.getItem('role')
        //     if (!role) {
        //         next({ path: '/' })
        //     }
        //     if (role !== 'admin') {
        //         next({ path: '/login' })
        //     }
        //     next()
        // },
        meta: {
            title: "Dashboard - EduManagementSystem - Admin",
        },
        children: [
            // {
            //     path: "home-page",
            //     name: "AdminHomePage",
            //     component: HomePage,
            //     meta: {
            //         title: "HomePage - EduManagementSystem - Admin",
            //     },
            // },
            {
                path: "Staff-list",
                name: "StaffList",
                component: StaffList,
                meta: {
                    title: "StaffList - EduManagementSystem - Admin",
                },
            },
            {
                path: "Trainer-list",
                name: "TrainerList",
                component: TrainerList_admin,
                meta: {
                    title: "TrainerList - EduManagementSystem - Admin",
                },
            },
            {
                path: "Trainee-list",
                name: "TraineeList",
                component: TraineeList_admin,
                meta: {
                    title: "TraineeList - EduManagementSystem - Admin",
                },
            },
            {
                path: "setting",
                name: "Setting",
                component: Setting,
                meta: {
                    title: "Setting - EduManagementSystem - Admin",
                },
            },
            {
                path: "adminProfile",
                name: "adminProfile",
                component: adminProfile,
                meta: {
                    title: "adminProfile",
                },
            },
            {
                path: "editAdminProfile",
                name: "editAdminProfile",
                component: editAdminProfile,
                meta: {
                    title: "editAdminProfile",
                },
            },
        ],
    },

    //=========================Staff============================
    {
        path: "/staff",
        redirect: { name: "staffProfile" },
        component: staffDashboard,
        // beforeEnter: (to, from, next) => {
        //     const role = sessionStorage.getItem('role')
        //     if (!role) {
        //         next({ path: '/' })
        //     }
        //     if (role !== 'staff') {
        //         next({ path: '/login' })
        //     }
        //     next()
        // },
        meta: {
            title: "Dashboard - EduManagementSystem - Staff",
        },
        children: [
            // {
            //     path: "home-page",
            //     name: "staffHomePage",
            //     component: HomePage,
            //     meta: {
            //         title: "HomePage - EduManagementSystem - Staff",
            //     },
            // },
            {
                path: "trainer-list",
                name: "TrainerList",
                component: TrainerList_staff,
                meta: {
                    title: "TrainerList - EduManagementSystem - Staff",
                },
            },
            {
                path: "trainee-list",
                name: "TraineeList",
                component: TraineeList_staff,
                meta: {
                    title: "TraineeList - EduManagementSystem - Staff",
                },
            },
            {
                path: "topic",
                name: "Topic",
                component: Topic,
                meta: {
                    title: "Topic",
                },
            },
            {
                path: "course",
                name: "Course",
                component: Course,
                meta: {
                    title: "Course",
                },
            },
            {
                path: "category",
                name: "Category",
                component: Category,
                meta: {
                    title: "Category",
                },
            },
            {
                path: "staffProfile",
                name: "staffProfile",
                component: staffProfile,
                meta: {
                    title: "staffProfile",
                },
            },
        ],
    },

    //=======================================trainee=======================================
    {
        path: "/trainee",
        redirect: { name: "TraineeHomePage" },
        name: "trainee",
        component: traineeDashboard,
        // beforeEnter: (to, from, next) => {
        //     const role = sessionStorage.getItem('role')
        //     if (!role) {
        //         next({ path: '/' })
        //     }
        //     if (role !== 'trainee') {
        //         next({ path: '/login' })
        //     }
        //     next()
        // },
        meta: {
            title: "Dashboard - EduManagementSystem - Trainee",
        },
        children: [{
                path: "home-page",
                name: "TraineeHomePage",
                component: HomePage,
                meta: {
                    title: "HomePage - EduManagementSystem - Trainee",
                },
            },
            {
                path: "profile/me",
                name: "Trainee-profile",
                component: traineeProfile,
                meta: {
                    title: "Profile",
                },
            },
        ],
    },

    //======================================trainer========================================
    {
        path: "/trainer",
        redirect: { name: "trainerProfile" },
        name: "trainer",
        component: trainerDashboard,
        // beforeEnter: (to, from, next) => {
        //     const role = sessionStorage.getItem('role')
        //     if (!role) {
        //         next({ path: '/' })
        //     }
        //     if (role !== 'trainer') {
        //         next({ path: '/login' })
        //     }
        //     next()
        // },
        meta: {
            title: "Dashboard - EduManagementSystem - Trainer",
        },
        children: [
            // {
            //     path: "home-page",
            //     name: "TrainerHomePage",
            //     component: HomePage,
            //     meta: {
            //         title: "HomePage - EduManagementSystem - Trainer",
            //     },
            // },
            {
                path: "trainerProfile",
                name: "Trainer-profile",
                component: trainerProfile,
                meta: {
                    title: "Profile",
                },
            },
        ],
    },

    //================================================================================
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Login - EduManagementSystem",
        },
    },
    {
        path: "*",
        name: "NotFound",
        component: NotFound,
        meta: {
            title: "404 - Page Not Found",
        },
    },
];

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;
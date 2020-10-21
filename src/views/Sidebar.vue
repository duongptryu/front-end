<template>
       <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-avatar">
                    <div class="avatar">
                        <img src="../assets/img/avatar1.jpg" alt="">
                    </div>
                    <div class="avatar-name">
                        <p style="color: white">Duongryu - Staff</p> 
                    </div>
                </li>

                <li v-if="admin">
                    <router-link to='/admin/staff-list'><i class="icofont-notepad"></i> Staff List</router-link>
                </li>


                <li v-if="admin">
                    <router-link to='/admin/trainer-list'><i class="icofont-notepad"></i> Trainer List</router-link>
                </li>

                 <li v-if="staff">
                    <router-link to='/staff/trainer-list'><i class="icofont-notepad"></i> Trainer List</router-link>
                </li>



                <li v-if="admin">
                    <router-link to='/admin/trainee-list'><i class="icofont-notepad"></i> Trainee List</router-link>
                </li>

                <li v-if="staff">
                    <router-link to='/staff/trainee-list'><i class="icofont-notepad"></i> Trainee List</router-link>
                </li>


                <li v-if="staff">
                    <router-link to='/staff/topic'><i class="icofont-notepad"></i> Topics </router-link>
                </li>



                <li v-if="staff">
                    <router-link to='/staff/course'><i class="icofont-notepad"></i> Courses </router-link>
                </li>


                <li v-if="staff">
                    <router-link to='/staff/category'><i class="icofont-notepad"></i> Categories </router-link>
                </li>



                <li v-if="admin">
                    <router-link to='/admin/adminProfile'><i class="icofont-notepad"></i>Profile </router-link>
                </li>

                
                <li v-if="staff">
                    <router-link to='/staff/staffProfile'><i class="icofont-notepad"></i>Profile </router-link>
                </li >

                <!-- Trainee -->

                <li v-if="trainee">
                    <router-link to='/trainee/traineeProfile'><i class="icofont-notepad"></i>Profile </router-link>
                </li>

                <!-- Trainer -->
                
                <li v-if="trainer">
                    <router-link to='/trainer/trainerProfile'><i class="icofont-notepad"></i>Profile </router-link>
                </li>

                <li>
                    <router-link to='/ManagementSystem/setting'><i class="icofont-settings-alt"></i> Setting</router-link>
                </li>

                 <li>
                    <router-link to='/login'><i class="icofont-logout"></i> Logout</router-link>
                </li>
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->
</template>

<script>
export default {
    name: 'Sidebar',
    admin: false,
    staff: false,
    trainee: false,
    trainer: false,
    created(){
        const role = sessionStorage.getItem('role')
        if(role === 'admin'){
            this.admin = true
            this.staff = false
            this.trainee = false
            this.trainer = false
        }else if(role === 'staff') {
            this.admin = false
            this.staff = true
            this.trainee = false
            this.trainer = false
        }else if(role === 'trainee') {
            this.admin = false
            this.staff = false
            this.trainee = true
            this.trainer = false
        } else if (role === 'trainer') {
            this.admin = false
            this.staff = false
            this.trainee = true
            this.trainer = false
        }else {
            this.admin = false
            this.staff = false
            this.trainee = false
            this.trainer = false
        }
    }
}
</script>

<style>
    @import '../assets/css/Sidebar.css';
</style>



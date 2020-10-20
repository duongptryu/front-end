<template>
       <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-avatar">
                    <div class="avatar">
                        <img src="../assets/img/avatar1.jpg" alt="">
                    </div>
                    <div class="avatar-name">
                        <p style="color: white">Adminstrator</p> 
                    </div>
                </li>
                <li>
                    <router-link to='/ManagementSystem/Staff-List'><i class="icofont-notepad"></i> Staff List</router-link>
                </li>
                <li>
                    <router-link to='/ManagementSystem/Trainer-List'><i class="icofont-notepad"></i> Trainer List</router-link>
                </li>
                <li>
                    <router-link to='/ManagementSystem/Trainee-List'><i class="icofont-notepad"></i> Trainee List</router-link>
                </li>
                <li hidden>
                    <router-link to='/ManagementSystem/Topic'><i class="icofont-notepad"></i> Topics </router-link>
                </li>
                <li hidden>
                    <router-link to='/ManagementSystem/Course'><i class="icofont-notepad"></i> Courses </router-link>
                </li>
                <li hidden>
                    <router-link to='/ManagementSystem/Category'><i class="icofont-notepad"></i> Categories </router-link>
                </li>
                <li>
                    <router-link to='/ManagementSystem/adminProfile'><i class="icofont-notepad"></i> Admin's Profile </router-link>
                </li>
                <li>
                    <router-link to='/ManagementSystem/createNewStaff'><i class="icofont-bird-wings"></i>  Add Member </router-link>
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
    name: 'Sidebar'
}
</script>

<style>
    @import '../assets/css/Sidebar.css';
</style>



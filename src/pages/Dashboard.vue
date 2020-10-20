<template>
    <div id="wrapper" v-bind:class="toggle">         
        <!-- Sidebar -->
        <Sidebar/>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <!-- /#page-topbar -->
            <Topbar @toggle="toggleMenu()"/>
            <!-- /#page-topbar -->
            <div class="container-fluid dashboard">
                <router-view></router-view>
            </div>
        </div>
        <Footer/>
        <!-- /#page-content-wrapper -->
    </div>  
</template>

<script>

import Topbar from '../views/Topbar';
import Sidebar from '../views/Sidebar';
import Footer from '../views/Footer'

export default {
    name: 'home',
    components:{
        Topbar,
        Sidebar,
        Footer
    },
    beforeCreate: function() {
      document.body.className = 'ManagementSystem'
    },
    data(){
        return{
            toggle: '',
            toggleBool: false
        }
    },
    methods:{
        toggleMenu(){
            this.toggleBool = !this.toggleBool;
            if(this.toggleBool == true){
                this.toggle = 'toggled'
            }else{
                this.toggle = ''
            }
        },
    }
}
</script>

<style>
  body.ManagementSystem {
    background-color: #ffffff;
  }

  @import '../assets/css/ManagementSystem.css';
</style>



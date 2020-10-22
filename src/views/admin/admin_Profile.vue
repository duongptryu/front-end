<template>
    <div class="container emp-profile">
        <form method="post">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src="../../assets/img/adminAvatar.jpg" alt=""/>
                        <div class="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="profile-head">
                                <h5>
                                    {{ username }}
                                    <!-- phai co binding data vao day de hien thi ten -->
                                </h5>
                                <h6>
                                    {{ username }}
                                    <!-- phai co binding data vao day de hien thi role -->
                                </h6>
                                <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2">
                    <router-link class="profile-edit-btn" to='/admin/editAdminProfile'><i class="icofont-notepad"></i> Edit Profile </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    
                </div>
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Username</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{{ username }}</p>
                                    <!-- phai co binding data vao day de hien thi username -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Password</label>
                                </div>
                                <div class="col-md-6">
                                    <b-form-checkbox
                                        id="checkbox-1"
                                        v-model="password"
                                        name="checkbox-1"
                                        v-bind:value="password"
                                        unchecked-value="hidden"
                                        checked-value="true"
                                        >
                                        <p>{{ password }}</p>
                                    </b-form-checkbox>
                                    <!-- phai co binding data vao day de hien thi password -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>           
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'admin_Profile',
    data() {
      return {
        url: "http://localhost:3000",
        password: '',
        username: '',
      }
    },
    created(){
         axios.get(`${this.url}/login/get-user`, {
          withCredentials: true,
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        })
        .then(res => {      
            this.username = res.data.user.username
            this.password = res.data.user.password
        }).catch((err) => {
            console.log(err)
        }) 
    }
}
</script>

<style scoped src="../../assets/css/adminProfile.css"></style>
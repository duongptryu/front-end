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
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profile</a>
                            </li>
                        </ul>
                    </div>
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
                                    <input type="text" placeholder="Enter username" v-bind:value="username" disabled>
                                    <!-- phai co binding data vao day de hien thi username -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Password old</label>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" placeholder="Enter password" v-model="postBody.oldPassword">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>New Password</label>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" placeholder="Enter password" v-model="postBody.newPassword">
                                </div>
                            </div>
                             <div class="row">
                                <div class="col-md-6">
                                    <label>Re-enter password</label>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" placeholder="Enter password" v-model="repeatPw">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                 
                                </div>
                                <div class="col-md-6">
                                   <button class="btn btn-warning" @click="updateAdmin()" type="button">Submit</button>
                                </div>
                                 <p style="color:red">{{ message }}</p>
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
        postBody: {
            oldPassword:'',
            newPassword: '',
        },
        repeatPw:'',
        username: '',
        message: ''
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
        }).catch(() => {
            this.$router.push({path: '/login'});
        }) 
    },
    methods:{
        updateAdmin(){
            if(this.postBody.newPassword !== this.repeatPw){
                this.message = "Password is not the same"
                return false;
            }
            axios.post(`${this.url}/admin/update-admin`, this.postBody,{
                withCredentials: true,
                mode: "cors",
                headers: { "Content-Type": "application/json" },
            })
            .then(() => {   
                window.alert("Change password succesfull, please login again");
                sessionStorage.setItem('role',null)
                axios.post(`${this.url}/login/logout`,{
                    withCredentials: true,
                    mode: "cors",
                    headers: { "Content-Type": "application/json" },
                }).then(() => {
                    return this.$router.push({path: '/login'});
                }).catch(() => {
                    return this.$router.push({path: '/login'});
                })
            }).catch((err) => {
                if(err.response.status === 400 ){
                    return this.message = "Password is not correct"
                }
                this.message = "Something wrong, please try again"
            }) 
        }
    }
}
</script>

<style scoped src="../../assets/css/adminProfile.css"></style>
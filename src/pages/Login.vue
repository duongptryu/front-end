<template>
  <div class="container-fluid">
    <div class="container">
      <div class="col-xl-10 col-lg-10 mx-auto login-container">
        <div class="row">
          <div class="col-lg-5 col-md-6 no-padding">
            <div class="login-box">
              <h5>Welcome Back Adminstrator!</h5>
              <div class="login-row row no-margin">
                <label for>
                  <i class="fas fa-envelope"></i> Username
                </label>
                <input
                  v-model="username"
                  type="email"
                  class="form-control form-control-sm"
                  spellcheck="false"
                />
              </div>

              <div class="login-row row no-margin">
                <label for>
                  <i class="fas fa-unlock-alt"></i> Password
                </label>
                <input v-model="password" type="password" class="form-control form-control-sm" />
              </div>

              <div class="login-row row forrr no-margin">
                <p>
                  <input type="checkbox" /> Remember Me
                </p>
                <p>
                  <a class="vgh" href>Forget Password?</a>
                </p>
              </div>

              <div class="login-row btnroo row no-margin">
                <button type="button" class="btn btn-primary btn-sm" @click="login()">
                  <router-link to="/ManagementSystem/Home-page" style="color:#fff;">Sign In</router-link>
                </button>
              </div>
              <div class="login-row donroo row no-margin">
                <p>
                  Dont have an Account ?
                  <a href>Sign Up</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-7 col-md-6 img-box">
            <img src="../assets/sideimg.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    beforeCreate: function() {
        document.body.className = 'login';
    },
    data() {
        return {
            postBody:{
                username: 'asdasd',
                password: '123456'
            }
        }
    },
    methods: {
        login() {
            axios.post('http://9cc5b23b608e.ngrok.io/login/staff-login', this.postBody,{
                withCredentials: true,
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
            }).then(response => {
                console.log(response);
            })
            // fetch("http://ee62184f9006.ngrok.io/login/staff-login",{
            //     method: "POST",
            //     headers: {
            //         "Content-Type": 'application/json',
            //     },
            //     mode: 'cors',
            //     credentials: 'include',
            //     body: JSON.stringify( this.postBody )
            // }).then(response => {
            //     console.log(response)
            // })
        }
    }
}
</script>

<style>
body.login {
  background-color: #f5f5fc;
  background-image: url(../assets/login-bg.jpg);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

<style scoped src="../assets/css/Login.css"></style>
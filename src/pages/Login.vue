<template>
  <div class="container-fluid">
    <div class="container">
      <div class="col-xl-10 col-lg-10 mx-auto login-container">
        <div class="row">
          <div class="col-lg-5 col-md-6 no-padding">
            <div class="login-box">
              <h5>Welcome Back Adminstrator!</h5>
              <div class="login-row row no-margin">
                <label for> <i class="fas fa-envelope"></i> Username </label>
                <input
                  v-model="postBody.username"
                  type="email"
                  class="form-control form-control-sm"
                  spellcheck="false"
                />
              </div>

              <div class="login-row row no-margin">
                <label for> <i class="fas fa-unlock-alt"></i> Password </label>
                <input
                  v-model="postBody.password"
                  type="password"
                  class="form-control form-control-sm"
                />
              </div>

              <div class="login-row row forrr no-margin">
                <p><input type="checkbox" /> Remember Me</p>
                <p>
                  <a class="vgh" href>Forget Password?</a>
                </p>
              </div>
              <p>Login as:</p>
              <!-- <el-select v-model="value" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select> -->
              <b-form-select v-model="value" :options="options"></b-form-select>
              <div class="login-row btnroo row no-margin">
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  @click="login()"
                >
                  <router-link to style="color:#fff;">Sign In</router-link>
                </button>
                {{ info }}
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
            <img src="../assets/img/sideimg.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  beforeCreate: function() {
    document.body.className = "login";
  },
  data() {
    return {
      url: 'http://localhost:3000',
      postBody: {
        username: '',
        password: '',
      },
      options: [
        {
          value: "admin-login",
          text: 'Admin',
        },
        {
          value: "staff-login",
          text: "Staff"
        },
        {
          value: 'trainee-login',
          text: "Trainee"
        },
        {
          value: "trainer-login",
          text: "Trainer"
        }
      ],
      value: "admin-login",
      info: null
    };
  },
  methods: {
    login() {
      var role = "";
      for(var i = 0; i < this.options.length; i++) {
        if(this.value === this.options[i].value) {
          role = this.options[i].value;    
        }
      }
      console.log(this.url)
      axios
        .post(`${this.url}/login/${role}`, this.postBody, {
          withCredentials: true,
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          const permission = response.data.role;
          sessionStorage.setItem('role',permission)
          if(permission === 'admin'){
            this.$router.push({path: '/admin'});
          }else if(permission === 'staff'){
             this.$router.push({path: '/staff'});
          }else if(permission === 'trainee'){
            this.$router.push({path: '/trainee'});
          }else if(permission === 'trainer'){
            this.$router.push({path: '/trainer'});
          }else{
            this.$router.push({path: '/'});
          }
        }).catch(() => {
              this.info = 'Incorrect username or password';
        });
    },
  },
};
</script>

<style>
body.login {
  background-color: #f5f5fc;
  background-image: url(../assets/img/login-bg.jpg);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

<style scoped src="../assets/css/Login.css"></style>

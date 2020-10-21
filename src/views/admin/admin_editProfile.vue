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
                                    Nguyen Van A
                                    <!-- phai co binding data vao day de hien thi ten -->
                                </h5>
                                <h6>
                                    Admin 
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
                                    <input type="text" placeholder="Enter username">
                                    <!-- phai co binding data vao day de hien thi username -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Password</label>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" placeholder="Enter password">
                                </div>
                            </div>
                             <div class="row">
                                <div class="col-md-6">
                                    <label>Re-enter password</label>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" placeholder="Enter password">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                 
                                </div>
                                <div class="col-md-6">
                                   <button class="btn btn-warning" type="submit">Submit</button>
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

export default {
    name: 'admin_Profile',
    data() {
      return { 
        password: 'Click Here To Show Passoword !'
      }
    }
}
</script>

<style scoped src="../../assets/css/adminProfile.css"></style>
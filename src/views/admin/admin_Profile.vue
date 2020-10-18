<template>
    <div class="container emp-profile">
        <form method="post">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src="../../assets/adminAvatar.jpg" alt=""/>
                        <div class="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="profile-head">
                                <h5>
                                    Kshiti Ghelani
                                    <!-- phai co binding data vao day de hien thi ten -->
                                </h5>
                                <h6>
                                    Trainer 
                                    <!-- phai co binding data vao day de hien thi role -->
                                </h6>
                                <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2">
                    <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-work">
                        <p>Experiences</p>
                        <a href="#">Company: VNPT</a><br/>
                        <!-- phai bind dat vao -->
                        <a href="#">Position: Giam Doc</a><br/>
                         <!-- phai bind dat vao -->
                        <a href="#">Time Start: 01-01-2020</a><br>
                         <!-- phai bind dat vao -->
                        <a href="#">Time End: 01-01-2020</a><br/>
                         <!-- phai bind dat vao -->
                        <p>SKILLS</p>
                        <a href="">Web Designer</a><br/>
                        <a href="">Web Developer</a><br/>
                        <a href="">WordPress</a><br/>
                        <a href="">WooCommerce</a><br/>
                        <a href="">PHP, .Net</a><br/>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Full Name</label>
                                </div>
                                <div class="col-md-6">
                                    <p>Con meo ngu ngoc</p>
                                    <!-- phai co binding data vao day de hien thi ten -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Username</label>
                                </div>
                                <div class="col-md-6">
                                    <p>Con meo ngu ngoc Cute Phomaique</p>
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
                                        value="conmeongungoc"
                                        unchecked-value="hidden"
                                        >
                                        <p>{{ password }}</p>
                                    </b-form-checkbox>
                                    <!-- phai co binding data vao day de hien thi password -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Email</label>
                                    <!-- phai co binding data vao day de hien thi email -->
                                </div>
                                <div class="col-md-6">
                                    <p>Conmeongungoc@gmail.com</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Age</label>    
                                </div>
                                <div class="col-md-6">
                                    <p>18</p>
                                    <!-- phai co binding data -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Education</label>
                                </div>
                                <div class="col-md-6">
                                    <p>University</p>
                                    <!-- phai co binding data -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Toeic Score</label>
                                </div>
                                <div class="col-md-6">
                                    <p>100</p>
                                    <!-- phai co binding data -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Address</label>
                                </div>
                                <div class="col-md-6">
                                    <p>234 Pham Van Dong, Ha Noi, Viet Nam</p>
                                    <!-- phai co binding data -->
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <label>Your Bio</label><br/>
                                    <p>Your detail description</p>
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
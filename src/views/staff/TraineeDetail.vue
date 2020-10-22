<template>
  <div class="container-fluid dashboard">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col-sm">
            <div class="card" id="qoutes">
              <div class="card-body">
                <div class="media align-items-center">
                  <div class="media-body">
                    <span>"Your time is limited, so don't waste it living someone else's life." <br> "Thời gian của bạn luôn có hạn, vì vậy đừng lãng phí nó để sống cuộc đời khác."</span>
                    </div>
                        <div class="text-center">
                            <i class="icofont-education"></i>
                        </div>
                    </div>
                  </div>
              </div>
          </div>

          <div class="col-sm">
            <div class="card search">
                <center>
                  <h5 id="title">It always seems impossible until it's done. <br> (Nelson Mandela)</h5>
                  <b-container class="bv-example-row">
                    <b-row>
                      <b-col class="col-8"><b-form-input v-model="keyword" type="text" debounce="500" placeholder="Search Question" id="keyword-input"></b-form-input></b-col>
                      <b-col class="col-4"><b-button>Search</b-button></b-col>
                    </b-row>
                  </b-container>
                </center>
            </div>
          </div> 
        </div>

        <div class="card question-list">
          <div class="title-card">
            <h4 class="position-center">Trainee Details</h4>
          </div>
            <div class="questionList">
              <table v-if="items.length" class="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th class="pick">
                      <label>
                        <input type="checkbox" v-model="selectAll" @click="select">
                      </label>
                    </th>
                    <th class="text-center">Username</th>
                    <th hidden class="text-center">Password</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Address</th>
                    <th class="text-center">Courses</th>
                    <th class="text-center">Education</th>
                    <th class="text-center">Experiences</th>
                    <th class="text-center">Main Program Language</th>
                    <th class="text-center">Education</th>
                    <th class="text-center">Toiec Score</th>
                    <th class="text-center">Option</th>
                  </tr>
                </thead>
                <tbody class="tb-body">
                  <tr v-for="(item, index) in resultQuery" :key="index">
                    <td>{{index + 1}}</td>
                    <td>
                      <label>
                        <input v-model="selected" :value="item._id" type="checkbox" @change="show">
                      </label>
                    </td>
                    <td>{{ item.username }}</td>
                    <td hidden>{{ item.password}}</td>
                    <td>{{ item.name}}</td>
                    <td>{{ item.address}}</td>
                    <td>{{ item.age}}</td>
                    <td>{{ item.courses}}</td>
                    <td>{{ item.education}}</td>
                    <td>{{ item.experiences}}</td>
                    <td>{{ item.mainProgramLanguage}}</td>
                    <td>{{ item.toeicScore}}</td>
                    <td>        
                        <!-- Form Popup for UPDATE STAFF-->
                        <b-modal
                        id="modal-prevent-closing1"
                        ref="modal"
                        title="UPDATE TRAINEE INFO"
                        @show="resetModal"  
                        @hidden="resetModal"
                        @ok="handleOk"
                        ok-title="Submit">

                            <form ref="form" @submit.stop.prevent="handleSubmit">
                                <b-form-group
                                label-for="course-new"
                                invalid-feedback="Success">
                                    <b-row class="decor">
                                      <b-col class="col-4"><span>Trainee Username</span></b-col>
                                      <b-col class="col-8">
                                          <b-form-input
                                          id="update-trainee-username"
                                          v-model="traineeUsername"
                                          v-bind:value="traineeUsername"
                                          required></b-form-input>
                                      </b-col>
                                  </b-row>
                                    <b-row class="decor">
                                        <b-col class="col-4"><span>Trainee Name</span></b-col>
                                        <b-col class="col-8">
                                            <b-form-input
                                            id="update-trainer-name"
                                            v-model="trainerName"
                                            v-bind:value="traineeName"
                                            required></b-form-input>
                                        </b-col>
                                    </b-row>
                                    <b-row class="decor">
                                        <b-col class="col-4"><span>Trainee Password</span></b-col>
                                        <b-col class="col-8">
                                            <b-form-input
                                            id="update-trainer-password"
                                            v-model="traineePassword"
                                            required></b-form-input>
                                        </b-col>
                                    </b-row>
                                    <b-row class="decor">
                                        <b-col class="col-4"><span>Trainee Address</span></b-col>
                                        <b-col class="col-8">
                                            <b-form-input
                                            id="update-trainer-address"
                                            v-model="traineeAddress"
                                            required></b-form-input>
                                        </b-col>
                                    </b-row>
                                    <b-row class="decor">
                                        <b-col class="col-4"><span>Trainee Telephone</span></b-col>
                                        <b-col class="col-8">
                                            <b-form-input
                                            id="update-trainer-education"
                                            v-model="traineeEducation"
                                            required></b-form-input>
                                        </b-col>
                                    </b-row>
                                    <b-row class="decor">
                                        <b-col class="col-4"><span>Trainee Courses</span></b-col>
                                        <b-col class="col-8">
                                            <b-form-input
                                            id="update-trainer-course"
                                            v-model="traineeCourses"
                                            required></b-form-input>
                                        </b-col>
                                    </b-row>
                                    <b-row class="decor">
                                        <b-col class="col-4"><span>Trainee Experiences</span></b-col>
                                        <b-col class="col-8">
                                            <b-form-input
                                            id="update-trainer-exp"
                                            v-model="traineeExp"
                                            required></b-form-input>
                                        </b-col>
                                    </b-row>
                                    <b-row class="decor">
                                        <b-col class="col-4"><span>Trainee Main Program Language</span></b-col>
                                        <b-col class="col-8">
                                            <b-form-input
                                            id="update-trainer-mainLang"
                                            v-model="traineeMainLang"
                                            required></b-form-input>
                                        </b-col>
                                    </b-row>
                                    <b-row class="decor">
                                        <b-col class="col-4"><span>Trainee TOEIC Score</span></b-col>
                                        <b-col class="col-8">
                                            <b-form-input
                                            id="update-trainer-toeicScore"
                                            v-model="traineeToeicScore"
                                            required></b-form-input>
                                        </b-col>
                                    </b-row>
                                </b-form-group>
                            </form>
                        </b-modal>               
                      <b-button @click="getData(item._id)" v-b-modal.modal-prevent-closing1 variant="warning" class="btnC" >Update</b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'StaffList',
    data() {
      return {
        url: 'http://deb6b3069831.ngrok.io',
        keyword: '',
        items: [],
        selectAll: false,
        selected: [],
        alertMessage: 'Calling APIs Successful !',
        traineeName: '',
        traineePassword: '',
        traineeAddress: '',
        traineeToeicScore: '',
        traineeMainLang: '',
        traineeExp: '',
        traineeCourses: '',
        traineeEducation: '',
      }
    },
  mounted(){
       axios.get(`${this.url}/admin/trainers`, {
          withCredentials: true,
          mode: "cors",
          headers: { "Content-Type": "application/json" }
       }).then(
        response => {
          this.items = response.data
        })
        // .catch(() => {
        //   this.$router.push({path: '/login'});
        // })
  },
  computed: {
      resultQuery() {
        if(this.keyword) {
          return this.items.filter((item) => {
            return this.keyword.toLowerCase().split(' ').every(v => item.Question.toLowerCase().includes(v))
          })
        }else {
          console.log(this.items)
          return this.items
        }
      }
    },
    methods: {
      select() {
        this.selected = [];
        if (!this.selectAll) {
          for (let i in this.items) {
            this.selected.push(this.items[i]._id);
          }
        }
        console.log(this.selected)
      },

      show() {
        console.log(this.selected)
      },

      getData(id) {
        axios.get(`${this.url}/admin/trainer?id=` + id, {
          withCredentials: true,
          mode: "cors",
          headersheaders: { "Content-Type": "application/json" }
        }).then( response => {
          this.trainerName = response.data[0].nameTrainer;
          this.trainerPassword = response.data[0].password;
          console.log(this.trainerName);
        })
      },

      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },

      resetModal() {
        this.name = ''
        this.nameState = null
      },

      handleOk(bvModalEvt, id) {
        axios.put(`${this.url}/admin/trainer?id= ` + id, {
          withCredentials: true,
          mode: "cors",
          headersheaders: { "Content-Type": "application/json" }
        }).then(
        //  chố này chịu :0
        )
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },

      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
  }
}
</script>

<style>

</style>

<style scoped src="../../assets/css/StaffList.css"></style>
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
            <h4>Course List</h4>
            <b-col><b-button v-b-modal.modal-prevent-closing variant="success" class="btnC">Create Course</b-button></b-col>
            <!-- Form -->
            <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="CREATE"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk">

            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                :state="nameState"
                label="Create New Course"
                label-for="course-new"
                invalid-feedback="Success">
                  <b-row>
                    <b-col class="col-4"><span>Code course:</span></b-col>
                    <b-col class="col-8">
                      <b-form-input
                        id="code-course"
                        v-model="code"
                        :state="code-course"
                        required></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col class="col-4"> <span>Name course:</span></b-col>
                    <b-col class="col-8">
                      <b-form-input
                        id="name-course"
                        v-model="name"
                        :state="nameCourse"
                        required>
                      </b-form-input>
                    </b-col>
                  </b-row>
                  <b-row>
                      <b-col class="col-4"><span>Name Trainer:</span></b-col>
                      <b-col class="col-8">
                        <b-form-input
                          id="name-trainer"
                          v-model="name"
                          :state="nameTrainer"
                          required>
                        </b-form-input>
                      </b-col>
                  </b-row>         
                  <b-form-group label="Categories:">
                    <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
                      <b-form-checkbox value="orange">Orange</b-form-checkbox>
                      <b-form-checkbox value="apple">Apple</b-form-checkbox>
                      <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
                      <b-form-checkbox value="grape">Grape</b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>
              </b-form-group>
            </form>
          </b-modal>
            <!-- ---------------------- -->
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
                    <th class="text-center">Course Name</th>
                    <th class="text-center">Description</th>
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
                    <td>{{ item.courseName }}</td>
                    <td>{{ item.description}}</td>
                    <!-- <td v-if="item.staffStatus">active</td>
                    <td v-else-if="!item.staffStatus">non-active</td> -->
                    <td> 
                      <button class="btn btn-success"><router-link to='/staff/CourseDetail.vue'>Details</router-link></button>
                      <button class="btn btn-primary" @click="update()">Update</button>
                      <button class="btn btn-danger" @click="remove(result.item._id)">Delete</button> 
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
        url: 'http://localhost:3000',
        keyword: '',
        items: [],
        selectAll: false,
        selected: [],
        alertMessage: 'Calling APIs Successful !',
        name: '',
        nameState: null,
        submittedNames: [],
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ]
      }
    },
  mounted(){
       axios.get(`${this.url}/staff/courses`,{
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
  },computed: {
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
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
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

<style scoped src="../../assets/css/StaffList.css"></style>


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
                  <h4 id="title">aLazyFox</h4>
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
            <h4>Staff List</h4>
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
                    <th class="text-center">StaffID</th>
                    <th>User_Name</th>
                    <th class="text-center">Passsword</th>
                    <th>Role</th>
                    <th>Staff_Name</th>
                    <th>Age</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in resultQuery" :key="index">
                    <td>{{index + 1}}</td>
                    <td>
                      <label>
                        <input v-model="selected" :value="item._id" type="checkbox" @change="show">
                      </label>
                    </td>
                    <td>{{ item._id }}</td>
                    <td>{{ item.username }}</td>
                    <td>{{ item.password }}</td>
                    <td>{{ item.role }}</td>
                    <td>{{ item.nameStaff}}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.staffStatus }}</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
    <!-- ----------------------------------------------------------------- -->
    <table class="table">
        <thead class="thead-dark">
            <tr class="text-center">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'StaffList',
    data() {
      return {
        keyword: '',
        items: [],
        selectAll: false,
        selected: [],
        alertMessage: 'Calling APIs Successful !'
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
      }
    },
    computed: {
      resultQuery() {
        if(this.keyword) {
          return this.items.filter((item) => {
            return this.keyword.toLowerCase().split(' ').every(v => item.Question.toLowerCase().includes(v))
          })
        }else {
          return this.items
        }
      }
    },
    mounted() {
      axios.get(`http://b5138aabec2f.ngrok.io/admin/staff`)
      .then(response => {this.items = response.data})
    }
}
</script>

<style>

</style>

<style scoped src="../assets/css/StaffList.css"></style>
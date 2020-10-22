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
                    <span
                      >"Your time is limited, so don't waste it living someone
                      else's life." <br />
                      "Thời gian của bạn luôn có hạn, vì vậy đừng lãng phí nó để
                      sống cuộc đời khác."</span
                    >
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
                <h5 id="title">
                  It always seems impossible until it's done. <br />
                  (Nelson Mandela)
                </h5>
                <b-container class="bv-example-row">
                  <b-row>
                    <b-col class="col-8"
                      ><b-form-input
                        v-model="keyword"
                        type="text"
                        debounce="500"
                        placeholder="Search Question"
                        id="keyword-input"
                      ></b-form-input
                    ></b-col>
                    <b-col class="col-4"><b-button>Search</b-button></b-col>
                  </b-row>
                </b-container>
              </center>
            </div>
          </div>
        </div>

        <div class="card question-list">
          <div class="title-card">
            <h4 class="position-center">Staff List</h4>
            <b-col
              ><b-button
                @click="creteStaff()"
                v-b-modal.modal-prevent-closing
                variant="success"
                class="btnC"
                >Create Staff</b-button
              ></b-col
            >
            <!-- Form Popup for UPDATE STAFF-->
            <b-modal
              id="modal-prevent-closing1"
              ref="modal"
              title="UPDATE STAFF INFO"
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk"
              ok-title="Submit"
            >
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group label-for="course-new" invalid-feedback="Success">
                  <b-row>
                    <b-col class="col-4"><span>Username</span></b-col>
                    <b-col class="col-8">
                      <b-form-input
                        id="update-staff-username"
                        v-model="update.postBody.username"
                        required
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col class="col-4"><span>Staff Password</span></b-col>
                    <b-col class="col-8">
                      <b-form-input
                        id="update-staff-password"
                        v-model="update.postBody.password"
                        required
                      ></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
              </form>
            </b-modal>
            <!-- Form Popup for CREATE STAFF -->
            <b-modal
              id="modal-prevent-closing"
              ref="modal"
              title="CREATE NEW STAFF"
              @show="resetModal"
              @hidden="resetModal"
              @ok="createStaff()"
              ok-title="Submit"
            >
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group label-for="course-new" invalid-feedback="Success">
                  <b-row>
                    <b-col class="col-4"><span>Staff Username</span></b-col>
                    <b-col class="col-8">
                      <b-form-input
                        id="create-staff-name"
                        v-model="update.postBody.username"
                        required
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col class="col-4"> <span>Staff Password:</span></b-col>
                    <b-col class="col-8">
                      <b-form-input
                        id="create-staff-password"
                        v-model="update.postBody.password"
                        required
                      >
                      </b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
              </form>
            </b-modal>
          </div>
          <div class="questionList">
            <table v-if="items.length" class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th class="pick">
                    <label>
                      <input
                        type="checkbox"
                        v-model="selectAll"
                        @click="select"
                      />
                    </label>
                  </th>
                  <th class="text-center">Username</th>
                  <th class="text-center">Password</th>
                  <th class="text-center">Name</th>
                  <th class="text-center">Status</th>
                  <th class="text-center">Option</th>
                </tr>
              </thead>
              <tbody class="tb-body">
                <tr v-for="(item, index) in resultQuery" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <label>
                      <input
                        v-model="selected"
                        :value="item._id"
                        type="checkbox"
                        @change="show"
                      />
                    </label>
                  </td>
                  <td>{{ item.username }}</td>
                  <td>{{ item.password }}</td>
                  <td>{{ item.nameStaff }}</td>
                  <td v-if="item.staffStatus">active</td>
                  <td v-else-if="!item.staffStatus">non-active</td>
                  <td>
                    <button class="btn btn-danger" @click="remove(item._id)">
                      Delete
                    </button>
                    <b-button
                      @click="getData(item._id)"
                      v-b-modal.modal-prevent-closing1
                      variant="warning"
                      class="btnC"
                      >Update</b-button
                    >
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
import axios from "axios";
export default {
  name: "StaffList",
  data() {
    return {
      url: "http://localhost:3000",
      keyword: "",
      items: [],
      selectAll: false,
      selected: [],
      alertMessage: "Calling APIs Successful !",
      staffName: "",
      staffPassword: "",
      update: {
        id: "",
        postBody: {
          username: "",
          password: "",
        },
      },
    };
  },
  mounted() {
    axios
      .get(`${this.url}/admin/staff`, {
        withCredentials: true,
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        this.items = response.data;
      });
    // .catch(() => {
    //   this.$router.push({path: '/login'});
    // })
  },
  computed: {
    resultQuery() {
      if (this.keyword) {
        return this.items.filter((item) => {
          return this.keyword
            .toLowerCase()
            .split(" ")
            .every((v) => item.Question.toLowerCase().includes(v));
        });
      } else {
        console.log(this.items);
        return this.items;
      }
    },
  },
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.items) {
          this.selected.push(this.items[i]._id);
        }
      }
      console.log(this.selected);
    },

    show() {
      console.log(this.selected);
    },

    remove(id) {
      axios
        .delete(`${this.url}/admin/delete-staff/` + id, {
          withCredentials: true,
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        })
        .then(() => {
          window.alert("Delete Successful !");
          window.location.reload();
        });
    },

    getData(id) {
      axios
        .get(`${this.url}/admin/staff?id=` + id, {
          withCredentials: true,
          mode: "cors",
          headersheaders: { "Content-Type": "application/json" },
        })
        .then((response) => {
          this.update.id = response.data[0]._id;
          document.querySelector("#update-staff-password").value = "*********";
          document.querySelector("#update-staff-username").value =
            response.data[0].username;
        });
    },

    createStaff() {
      axios
        .post(
          `${this.url}/admin/create-staff`,
          this.update.postBody,
          {
            withCredentials: true,
            mode: "cors",
            headersheaders: { "Content-Type": "application/json" },
          }
        )
        .then(() => {
          window.alert("Create successfull");
          window.location.reload();
        })
        .catch(() => {
          window.alert("Can't not update, please try again");
        });
    },

    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },

    resetModal() {
      this.name = "";
      this.nameState = null;
    },

    handleOk(bvModalEvt) {
      axios
        .patch(
          `${this.url}/admin/update-staff/` + this.update.id,
          this.update.postBody,
          {
            withCredentials: true,
            mode: "cors",
            headersheaders: { "Content-Type": "application/json" },
          }
        )
        .then(() => {
          window.alert("Update successfull");
          window.location.reload();
        })
        .catch(() => {
          window.alert("Can't not update, please try again");
        });
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },

    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      // this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>

<style></style>

<style scoped src="../../assets/css/StaffList.css"></style>

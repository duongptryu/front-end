<template>
    <div class="container-fluid dashboard">
      <div class="col filter">
        <b-row>

          <b-col sm>
            <div class="card filter-type">
              <b-form-input v-model="studentID" placeholder="Enter StudentID"></b-form-input>
            </div>
          </b-col>

          <b-col sm>
            <div class="card filter-fdate">
              <input type="date" class="form-control" v-model="startDate">
            </div>
          </b-col>

          <b-col sm>
            <div class="card filter-ldate">
              <input type="date" class="form-control" v-model="endDate">
            </div>
          </b-col>

          <b-col sm>
            <div class="card filter-button">
              <button>Filter</button>
            </div>
          </b-col>

        </b-row>
      </div>

      <div class="col">
        <div class="row">
          <b-col sm>
            <div class="card area">
              <div class="title">
                <h4>Correct Answer</h4>
              </div>

              <TrueChart/>

            </div>
          </b-col>

          <b-col sm>
            <div class="card pie">
              <div class="title">
                <h4>Incorrect Answer</h4>
              </div>

              <FalseChart/>

            </div>
          </b-col>
        </div>
      </div>

    </div>
</template>

<script>

import TrueChart from '../components/TrueChart'
import FalseChart from '../components/FalseChart'

export default {
    name: 'Individual',
    components: {
      TrueChart,
      FalseChart
    },
    data() {
      return {
        studentID: '',
        startDate: '',
        endDate: '',
      }
    }
}
</script>

<style>

</style>

<style scoped src="../assets/css/Individual.css"></style>
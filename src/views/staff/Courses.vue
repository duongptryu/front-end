<template>
  <div>
      <b-container fluid="">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <h1 class="text-center">Courses</h1>
            <b-form-group id="input-group-1" label="Course Name:" label-for="input-1">
                <b-form-input
                id="input-1"
                v-model="form.course"
                required
                placeholder="Enter Course Name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Course Description:" label-for="input-2">
              <b-form-input
              id="input-2"
              v-model="form.description"
              required
              placeholder="Enter Course Description"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Topic:" label-for="input-3">
                <b-form-select
                id="input-3"
                v-model="form.topic"
                :options="topicList"
                placeholder="Select Topics For Course"
                required
                ></b-form-select>
            </b-form-group>
            
               <b-form-group id="input-group-3" label="Category:" label-for="input-3">
                <b-form-select
                id="input-3"
                v-model="form.category"
                :options="categoryList"
                placeholder="Select Topics For Course"
                required
                ></b-form-select>
            </b-form-group>

            <b-button id="form_button" type="submit" variant="primary">Submit</b-button>
            <b-button id="form_button" type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          course: '',
          description: '',
          topic: '',
          category: '',
          topicList: null,
          categoryList: null
        },
        topicList: [{ text: 'Select Topic', value: null }, 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'],
        categoryList:  [{ text: 'Select Category', value: null }, 'Category 1', 'Category 2', 'Category 3', 'Category 4'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.course = ''
        this.form.description = ''
        this.form.topic =''
        this.form.category =''
        this.form.topicList = null
        this.form.categoryList = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped src="../../assets/css/staffForm.css"></style>
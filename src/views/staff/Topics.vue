<template>
  <div>
      <b-container fluid="">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <h1 class="text-center">Topics</h1>
            <b-form-group id="input-group-1" label="Topic Name:" label-for="input-1">
                <b-form-input
                id="input-1"
                v-model="form.topic"
                required
                placeholder="Enter Topic Name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Topic Description:" label-for="input-2">
              <b-form-input
              id="input-2"
              v-model="form.description"
              required
              placeholder="Enter Topic Description"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Topic's Course:" label-for="input-3">
                <b-form-select
                id="input-3"
                v-model="form.topic_course"
                :options="topic_course"
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
          topic: '',
          description: '',
          topic_course: null,
        },
        topic_course: [{ text: 'Select Course for Topic', value: null }, 'Course 1', 'Course 2', 'Course 3', 'Course 4'],
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
        this.form.topic = ''
        this.form.description = ''
        this.form.topic_course = null
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
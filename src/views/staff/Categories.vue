<template>
  <div>
      <b-container fluid="">
        <h1 class="text-center">Categories</h1>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Category Name:" label-for="input-1">
                <b-form-input
                id="input-1"
                v-model="form.category"
                required
                placeholder="Enter Category Name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Category Description:" label-for="input-2">
              <b-form-input
              id="input-2"
              v-model="form.description"
              required
              placeholder="Enter Category Description"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Category's Course:" label-for="input-3">
                <b-form-select
                id="input-3"
                v-model="form.category"
                :options="categoriesList"
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
          category: '',
          description: '',
          categoriesList: null,
        },
        categoriesList: [{ text: 'Select Category', value: null }, 'Category 1', 'Category 2', 'Category 3', 'Category 4'],
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
        this.form.course_topic = null
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
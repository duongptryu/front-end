<template>
  <div>
      <b-container fluid="">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter memeber email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Member Name:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter memeber name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Member DoB:" label-for="input-3">
                <b-form-input
                id="input-3"
                v-model="form.DoB"
                required
                type="date"
                placeholder="Enter memeber DoB"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Role:" label-for="input-4">
                <b-form-select
                id="input-3"
                v-model="form.role"
                :options="roles"
                required
                ></b-form-select>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
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
          email: '',
          name: '',
          DoB: '',
          role: null,
        },
        roles: [{ text: 'Select One', value: null }, 'Staff', 'Trainer', 'Trainee', 'Guest'],
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
        this.form.email = ''
        this.form.name = ''
        this.form.role = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<template>
  <div class="login-page">
    <div id="container">
      <div id="login-page">
        <div class="login-header">
          <div class="corp-logo"></div>
        </div>
        <div class="login-form">
          <div class="login-desc">Enter your Qwasar login</div>
          <form action="#" class="form-modal" @submit.prevent="submit">
            <div class="form-control">
              <label for="email">Your Qwasar login</label>
              <input type="text" name="" v-model="login">
            </div>
            <div class="form-control submit-btn">
              <button type="submit" :disabled="disableBtn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'QwasarCheck',
  data: () => ({
    login: '',
    disableBtn: false
  }),
  validations: {
    login: {
      required,
      minLength: minLength(3)
    }
  },

  mounted() {
    document.title = 'AstroCoin | Connect Qwasar'
  },
  methods: {
    async submit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        if (this.$v.login.$invalid) {
          Toast.fire('Qwasar field is required', '', 'error')
        }
        return
      }
      try {
        await this.$store.dispatch('qwasarCheck', {
          qwasar: this.login,
        })
        Toast.fire('We have emailed you the registration link!', '', 'success')
        this.disableBtn = true
        this.login = ''
      } catch (e) {
        if (this.$store.state.errors) {
          for (const key in this.$store.state.errors) {
            Toast.fire(this.$store.state.errors[key][0], '', 'error');
          }
        } else {
          Toast.fire(this.$store.state.error, '', 'error')
        }
      }
    }
  }
}
</script>

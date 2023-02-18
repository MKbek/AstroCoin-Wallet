<template>
  <div>
    <div id="container">
      <div id="login-page">
        <div class="login-header">
          <div class="app-logo"></div>
        </div>
        <div class="login-form">
          <div class="login-desc">Enter your email address to get recover link</div>
          <form action="#" method="post" class="form-modal" @submit.prevent="submit">
            <div class="form-control">
              <label for="email">E-mail:</label>
              <input type="email" name="" id="email" v-model="email">
            </div>
            <router-link to="/login" class="forgot-pass">Login</router-link>
            <router-link to="/qwasar-check" class="forgot-pass">Registration</router-link>
            <div class="form-control submit-btn">
              <button type="submit" :disabled="success === true">Get link</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email } from 'vuelidate/src/validators'
export default {
  name: 'Recover',
  data: () => ({
    email: '',
    success: false,
  }),
  validations: {
    email: {
      required,
      email
    },
  },
  mounted() {
    document.title = 'AstroCoin | Reset Password'
  },
  methods: {
    async submit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        if (this.$v.email.$invalid) {
          Toast.fire('E-mail not found', '', 'error')
        }
        return
      }
      try {
        await this.$store.dispatch('resetPassword', {
          email: this.email
        })
        Toast.fire('We have sent you the link!', '', 'success')
        this.email = ''
        this.success = true
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

<style scoped>
#container {
  height: 97vh;
  justify-content: center;
}
</style>

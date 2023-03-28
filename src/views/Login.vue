<template>
  <div class="login-page">
    <div id="container">
      <div id="login-page">
        <div class="login-header">
          <div class="app-logo"></div>
        </div>
        <div class="login-form">
          <div class="login-desc">AstroCoin wallet, login to your account</div>
          <form action="#" class="form-modal" @submit.prevent="submit">
            <div class="form-control">
              <label for="email">E-mail:</label>
              <input type="email" name="" id="email" v-model="email">
            </div>
            <div class="form-control">
              <label for="password">Password:</label>
              <input type="password" name="" id="password" v-model="password">
            </div>
            <router-link to="/qwasar-check" class="forgot-pass">Registration</router-link>
            <router-link to="/recover" class="forgot-pass">Forgot Password?</router-link>
            <div class="form-control submit-btn">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/src/validators'
export default {
  name: "Login",
  data: () => ({
    email: '',
    password: ''
  }),
  mounted() {
    document.title = 'AstroCoin | Login'
    if (localStorage.getItem('__asc_accessIDToken')) {
      this.$router.push(this.$route.query.redirect || '/')
    }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    async submit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        if (this.$v.email.$invalid) {
          Toast.fire('Email field is required', '', 'error')
        } else if (this.$v.password.$invalid) {
          Toast.fire('Password field is required', '', 'error')
        }
        return
      }
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        this.$router.push(this.$route.query.redirect || '/')
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
@import url('@/style/login.css');
</style>

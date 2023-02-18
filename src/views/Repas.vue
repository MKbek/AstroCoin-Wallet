<template>
  <div id="repass">
    <div class="login-page">
      <div id="container">
        <div id="login-page">
          <div class="login-header">
            <div class="app-logo"></div>
          </div>
          <div class="login-form">
            <div class="login-desc">Enter new password for your account</div>
            <form action="#" method="post" class="form-modal" @submit.prevent="submit">
              <div class="form-control">
                <label for="password">New password:</label>
                <input type="password" name="password" id="password" v-model="password">
              </div>
              <div class="form-control">
                <label for="verify_pass">Confirm password:</label>
                <input type="password" name="pass_two" id="verify_pass" v-model="confirmation">
                <input type="hidden" v-model="token">
                <input type="hidden" v-model="email" hidden>
              </div>
              <div class="form-control submit-btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { minLength, required, sameAs } from 'vuelidate/src/validators'
export default {
  name: 'Repass',
  data: () => ({
    password: '',
    confirmation: '',
    token: '',
    email: ''
  }),
  validations: {
    password: {
      required,
      minLength: minLength(8),
    },
    confirmation: {
      required,
      minLength: minLength(8),
      sameAs: sameAs('password'),
    },
  },
  mounted() {
    document.title = 'AstroCoin | Change Password'
    this.token = this.$route.query.token;
    this.email = this.$route.query.email;
  },
  methods: {
    async submit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        if (this.$v.password.$invalid) {
          Toast.fire('Password field is required', '', 'error')
        } else if (this.$v.confirmation.$invalid) {
          Toast.fire('Password confirmation field is required', '', 'error')
        } else if (this.$v.confirmation.$error.sameAs) {
          Toast.fire('Passwords do not match', '', 'error')
        }
        return
      }
      try {
        await this.$store.dispatch('changePassword', {
          password: this.password,
          password_confirmation: this.confirmation,
          token: this.token,
          email: this.email
        })
        Toast.fire('Пароль успешно изменен', '', 'success')
        this.$router.push('/login')
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
.login-page #container {
  display: flex;
  justify-content: center !important;
  height: 97vh !important;
}
</style>

<template>
  <div id="container">
    <div id="signup-page">
      <div class="signup-header">
        <div class="app-logo"></div>
      </div>
      <form action="#" method="post" class="form-modal" @submit.prevent="submit">
        <div class="signup-form">
          <div class="signup-desc">Hooray <span class="signup-user-fullname">{{ $route.query.name }} {{ $route.query.last_name }}</span>, we're almost done. Make sure that you have entered all the data correctly</div>
          <input type="text" name="" id="first_name" v-model="$route.query.name" hidden readonly>
          <input type="text" name="" id="last_name" v-model="$route.query.last_name" hidden readonly>
          <div class="form-control">
            <label for="qlogin">Qwasar Login:</label>
            <input type="text" name="" id="qlogin" v-model="$route.query.qwasar" readonly>
          </div>
          <div class="form-control">
            <label for="qlogin">Email:</label>
            <input type="text" name="" id="qlogin" v-model="$route.query.email" readonly>
          </div>
          <div class="form-control">
            <label for="phone">Phone:</label>
            <input type="number" name="" id="phone" v-model="number">
          </div>
          <div class="form-control">
            <label for="stack">Stack:</label>
            <select name="" id="stack" v-model="stack">
              <option :value="item.id" v-for="item in stacks" :key="item.id">{{ item.title }}</option>
            </select>
          </div>
          <div class="double-input">
            <div class="form-control">
              <label for="password">Password:</label>
              <input type="password" name="" id="password" v-model="password">
            </div>
            <div class="form-control">
              <label for="last_name">Confirm:</label>
              <input type="password" name="" id="password_confirm" v-model="confirm">
            </div>
          </div>
          <div class="form-control submit-btn">
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/src/validators'
export default {
  name: "Register",
  data: () => ({
    number: '',
    stack: '',
    stacks: null,
    password: '',
    confirm: ''
  }),
  async mounted() {
    document.title = 'AstroCoin | Registration'
    if (localStorage.getItem('token')) {
      this.$router.push('/')
    }
    await this.$store.dispatch('getStack')
    this.stacks = this.$store.state.stacks

    Toast.fire('Hooray you\'re in the last stage', '', 'info')
  },
  validations: {
    number: { required },
    stack: { required },
    password: { required, minLength: minLength(8) },
    confirm: { required, sameAsPassword: sameAs('password') }
  },
  methods: {
    async submit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        if (this.$v.number.required) {
          Toast.fire('Field "Phone" is required', '', 'error')
        } else if (this.$v.stack.required) {
          Toast.fire('Field "Stack" is required', '', 'error')
        } else if (this.$v.password.required) {
          Toast.fire('Field "Password" is required', '', 'error')
        } else if (this.$v.confirm.required) {
          Toast.fire('Field "Confirm" is required', '', 'error')
        } else if (this.$v.password.minLength) {
          Toast.fire('Password must be at least 8 characters', '', 'error')
        } else if (this.$v.confirm.sameAsPassword) {
          Toast.fire('Passwords do not match', '', 'error')
        }
        return
      }
      try {
        await this.$store.dispatch('register', {
          token: this.$route.query.token,
          qwasar: this.$route.query.qwasar,
          number: this.number,
          stack: this.stack,
          password: this.password,
          password_confirmation: this.confirm
        })
        Toast.fire('Registration successful', '', 'success')
        this.$router.push('/')
      } catch (e) {
        if (this.$store.state.errors) {
          for (const key in this.$store.state.errors) {
            Toast.fire(this.$store.state.errors[key][0], '', 'error');
          }
        }
        else {
          Toast.fire(this.$store.state.error, '', 'error')
        }
      }
    },
  },
}
</script>
<style scoped>
#container {
  height: 97vh;
  justify-content: center;
}
</style>


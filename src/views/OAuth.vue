<template>
  <div class="login-page">
    <div id="container">
      <div v-if="active" id="oauth-alert">
        <div class="oauth-alert_animationLoader">
          <img :src="$store.state.user.m_photo ? $store.state.url + '/storage/' + $store.state.user.m_photo : require(`../assets/default.webp`)" alt="">
        </div>
        <span class="oauth-alert_userFullName">{{ $store.state.user.name }} {{ $store.state.user.last_name[0] }}.</span>
        <span class="oauth-alert_pageTitle">Please wait we will redirect you with your data</span>
<!--        <div class="form-control submit-btn">-->
<!--          <button>Continue as Muhammad</button>-->
<!--        </div>-->
      </div>
      <div v-else id="login-page">
        <div class="login-header">
          <div class="store-logo" v-if="this.$route.query.app_hash === '20666ef4fc9e52c8a3fb3a57bab05afb7ca1744f4a939748d7436e8bf51fd6de'"></div>
          <div class="corp-logo" v-else-if="this.$route.query.app_hash === 'ba5b0af2688d31cf34d3b50b1b1bf8bb7c1deb7cf0c5774316f1ba4d'"></div>
          <div class="app-logo" v-else></div>
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
    password: '',
    active: !!localStorage.getItem("__asc_accessIDToken")
  }),
   mounted() {
    document.title = 'AstroCoin | OAuth'
    if (localStorage.getItem("__asc_accessIDToken")) {
      if (this.$route.query.app_id === '497fdd5c-3b8f-4b1a-9c1a-8c1a8c1a8c1a' && this.$route.query.app_hash === 'ba5b0af2688d31cf34d3b50b1b1bf8bb7c1deb7cf0c5774316f1ba4d' || this.$route.query.app_hash === '20666ef4fc9e52c8a3fb3a57bab05afb7ca1744f4a939748d7436e8bf51fd6de' && this.$route.query.callback_uri === 'https://store.astrocoin.uz' || this.$route.query.callback_uri === 'https://store.astrocoin.uz') {
        this.$store.dispatch('getUser', this.$route.fullPath).then(() => {
          setTimeout(() => {
            window.location.href =`${this.$route.query.callback_uri}/user/oauth?auth_token=${localStorage.getItem("__asc_accessIDToken")}&base_data=${window.btoa(unescape(encodeURIComponent(JSON.stringify(this.$store.state.user))))}`
          }, 1000)
        }).catch(() => {
          Toast.fire({
            icon: 'error',
            title: 'User not authorized'
          })
        })
      }else {
        this.$router.push('/')
      }
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
        this.active = true;
        if (this.$route.query.app_id === '497fdd5c-3b8f-4b1a-9c1a-8c1a8c1a8c1a' && this.$route.query.app_hash === 'ba5b0af2688d31cf34d3b50b1b1bf8bb7c1deb7cf0c5774316f1ba4d' || this.$route.query.app_hash === '20666ef4fc9e52c8a3fb3a57bab05afb7ca1744f4a939748d7436e8bf51fd6de' && this.$route.query.callback_uri === 'https://store.astrocoin.uz' || this.$route.query.callback_uri === 'https://admin.astrocoin.uz') {
          this.$store.dispatch('getUser', this.$route.fullPath).then(() => {
            setTimeout(() => {
              window.location.href =`${this.$route.query.callback_uri}/user/oauth?auth_token=${localStorage.getItem("__asc_accessIDToken")}&base_data=${window.btoa(unescape(encodeURIComponent(JSON.stringify(this.$store.state.user))))}`
            }, 1500)
          }).catch(() => {
            Toast.fire({
              icon: 'error',
              title: 'User not authorized'
            })
          })
        } else {
          this.$router.push('/')
        }
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

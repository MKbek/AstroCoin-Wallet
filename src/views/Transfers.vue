<template>
  <div>
    <div id="container">
      <div class="transfer-header">
        <div class="app-logo transfers"></div>
        <div class="hr-line"></div>
        <div class="header-title">Transfer</div>
      </div>
      <div id="transfer-page">
        <div class="transfer-userDate">
          <div class="transform_userPic">
            <img :src="$store.state.transferTo.m_photo ? $store.state.url + '/storage/' + $store.state.transferTo.m_photo : require(`../assets/default-user-pic.png`)" alt="">
          </div>
          <div class="transfer-userName">{{ $store.state.transferTo.fio }}
            <div v-if="$store.state.transferTo.verify" class="verify-ion">
              <svg width="18" height="18" fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.517 3.389c.776-.704 1.164-1.056 1.59-1.222a2.467 2.467 0 0 1 1.786 0c.427.166.814.518 1.59 1.222.366.331.549.497.753.62.275.167.58.278.898.327.236.037.482.028.976.008 1.046-.04 1.57-.06 2.003.087a2.467 2.467 0 0 1 1.368 1.148c.22.4.291.92.433 1.958.067.489.1.733.177.96.104.304.266.585.478.827.157.18.352.33.742.633.828.642 1.242.963 1.48 1.354.319.527.43 1.154.31 1.759-.09.448-.369.892-.927 1.778-.263.417-.395.626-.481.849-.116.3-.173.62-.166.94.005.24.057.48.161.963.222 1.024.333 1.536.263 1.988a2.468 2.468 0 0 1-.893 1.547c-.356.286-.855.446-1.853.766-.47.15-.705.226-.914.341-.282.155-.53.364-.732.614-.15.186-.265.405-.495.841-.488.927-.732 1.39-1.076 1.692A2.468 2.468 0 0 1 17.31 26c-.458-.01-.942-.208-1.912-.604-.457-.187-.686-.28-.92-.326a2.47 2.47 0 0 0-.955 0c-.235.046-.463.14-.92.326-.97.396-1.455.594-1.912.604a2.468 2.468 0 0 1-1.678-.61c-.344-.302-.589-.766-1.077-1.692-.23-.437-.345-.655-.495-.841a2.468 2.468 0 0 0-.732-.615c-.209-.115-.444-.19-.914-.34-.997-.32-1.496-.48-1.853-.767a2.468 2.468 0 0 1-.893-1.547c-.07-.452.041-.964.263-1.988.105-.482.157-.723.162-.962a2.467 2.467 0 0 0-.166-.941c-.087-.223-.218-.431-.481-.85-.559-.885-.838-1.329-.927-1.777a2.468 2.468 0 0 1 .31-1.759c.237-.391.651-.712 1.48-1.354.39-.302.584-.454.741-.633.212-.242.374-.523.478-.828.077-.226.11-.47.178-.96.141-1.037.212-1.556.433-1.957.296-.54.784-.95 1.368-1.148.433-.147.956-.127 2.003-.087.493.02.74.03.976-.008.317-.049.622-.16.897-.326.205-.124.388-.29.753-.621z" fill="#5733d1"></path>
                <path d="M9.476 14.707l2.879 2.879 5.758-5.758" id="verified_svg__verified_tick" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <div class="verification-toolTips">This account is verified from AstroCoin Team</div>
            </div>
          </div>
        </div>
        <div class="transfer-form">
          <div class="send-coin_userPic"></div>
          <div class="transfer-desc">Enter the amount you want to send</div>
          <form action="#" method="post" class="form-modal" @submit.prevent="transferCoin">
            <div class="form-control">
              <label for="amount">Amount:</label>
              <input type="number" name="" id="amount" v-model="amount">
            </div>
            <div class="form-control">
              <label for="amount">Comment:</label>
              <textarea type="text" v-model="comment"></textarea>
            </div>
            <div class="form-control submit-btn">
              <button class="submit-btn" type="submit" :disabled="success === true">Send {{ amount ? amount : 0 }} ASC</button>
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
  name: 'Transfers',
  data: () => ({
    amount: null,
    comment: '',
    success: false,
  }),
  validations: {
    email: {
      required,
      email
    },
  },
  mounted() {
    document.title = 'AstroCoin | Transfers'
    this.$store.dispatch('checkWallet', this.$route.params.wallet_token).then(e => {
      console.log('Success')
    }).catch(e => {
      Toast.fire('Wrong wallet', '', 'error')
      this.$router.push('/')
    })
  },
  methods: {
    async transferCoin() {
      try {
        await this.$store.dispatch('transfer', {
          wallet_to: this.$route.params.wallet_token,
          amount: this.amount,
          comment: this.comment
        })
        Toast.fire('Sent', '', 'success');
        await this.$store.dispatch('getUser')
        await this.$store.dispatch('getHistory')
        this.user = this.$store.state.user
        this.walletHistory = this.$store.state.walletHistory
        this.$router.push('/')
      } catch (e) {
        Toast.fire(this.$store.state.error, '', 'error')
        this.$router.push('/')
      }
    },
  }
}
</script>

<style scoped>
#container {
  height: 97vh;
  justify-content: center;
}
</style>

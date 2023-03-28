<template>
  <div>
    <div id="container">
      <div class="transfer-header">
        <router-link to="/" class="app-logo transfers"></router-link>
        <div class="hr-line"></div>
        <div class="header-title">Transfer</div>
      </div>
      <div id="transfer-page">
        <div class="transfer-userDate">
          <div class="transform_userPic">
            <img :src="$store.state.transferTo.m_photo ? $store.state.url + '/storage/' + $store.state.transferTo.m_photo : require(`../assets/default.webp`)" alt="">
          </div>
          <div class="transfer-userName">{{ $store.state.transferTo.fio }}
            <VerifiyAccountBadge v-if="$store.state.transferTo.verify" />
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
import VerifiyAccountBadge from "@/components/Icons/VerifyAccountBadge.vue";
export default {
  name: 'Transfers',
  components: {VerifiyAccountBadge},
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
    document.title = 'AstroCoin | Transfer'
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
@import url('@/style/transfer.css');
#container {
  height: 97vh;
  justify-content: center;
}
</style>

<template>
  <div class="home">
    <div id="container" v-if="user.status === 'verified'">
      <div id="header">
        <div class="left-content">
          <div class="app-logo main"></div>
        </div>
        <div class="center-content"></div>
        <div class="right-content">
          <div class="user-menu" @click="openUser">
            <img :src="user.photo ? this.$store.state.url + user.photo : require(`../assets/default.webp`)" class="user-pic" alt="">
          </div>
        </div>
      </div>
      <div id="main">
        <div class="coin-header">
          <div class="coin-logo">
            <div class="coin-icon">{astrocoin:coin_icon}</div>
          </div>
          <div class="coin-currency">{{ userBalance }} ASC</div>
          <div v-if="user.status !== 'unverified'" class="coin-buttons" :style="this.$store.state.receiveModal || this.$store.state.sendModal ? 'z-index: 1' : ''">
            <div v-if="user.role === 'superuser' || user.role === 'admin'" @click="openDashboard" class="coin-btn">
              <div class="coin-btn-icon">
                <svg
                    width="22"
                    viewBox="0 0 500 500"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M104 496H72a24 24 0 01-24-24V328a24 24 0 0124-24h32a24 24 0 0124 24v144a24 24 0 01-24 24zM328 496h-32a24 24 0 01-24-24V232a24 24 0 0124-24h32a24 24 0 0124 24v240a24 24 0 01-24 24zM440 496h-32a24 24 0 01-24-24V120a24 24 0 0124-24h32a24 24 0 0124 24v352a24 24 0 01-24 24zM216 496h-32a24 24 0 01-24-24V40a24 24 0 0124-24h32a24 24 0 0124 24v432a24 24 0 01-24 24z"/>
              </svg>
              </div>
              <span class="coin-btn-title">Stats</span>
            </div>
            <div class="coin-btn" @click.prevent="submitModal">
              <div class="coin-btn-icon">
                <ReceiveIcon />
              </div>
              <span class="coin-btn-title">Receive</span>
            </div>
            <div class="coin-btn" @click.prevent="sendModal">
              <div class="coin-btn-icon">
                <SendIcon />
              </div>
              <span class="coin-btn-title">Send</span>
            </div>
            <div @click="openStore" class="coin-btn">
              <div class="coin-btn-icon">
                <StoreIcon />
              </div>
              <span class="coin-btn-title">Store</span>
            </div>
          </div>
          <div v-if="user.status === 'unverified'">
            <p class="text-error font-default">
              Your account is unverified
            </p>
          </div>
        </div>
        <div class="coin-body" v-if="walletHistory.length !== 0">
          <div class="main-tools" :class="{'left': activeItem === 'story-transfers', 'right': activeItem === 'story-buy'}">
            <div class="story-transfers story-btn" @click="setActive('story-transfers')" :class="{ active: isActive('story-transfers') }">Transactions</div>
            <div class="story-buy story-btn" @click="setActive('story-buy')" :class="{ active: isActive('story-buy') }">Orders</div>
          </div>
          <div class="story" :class="{'transfer': activeItem === 'story-transfers', 'buy': activeItem === 'story-buy'}">
            <div id="story-transfers">
              <div style="display: flex; justify-content: center;">
                <bounce-loader :loading="loading" :color="'#3721d6'"></bounce-loader>
              </div>
              <div class="card" v-for="(history, date) in walletHistory" :key="date">
                <div class="transfers-date">
                  {{ date }}
                </div>
                <div v-for="(item, index) in history" @click="setCheque(item)" :key="index" :class="item.status == 'failed' ? 'failed-coin' : item.wallet_to == user.wallet ? 'receive-coin' : 'remove-coin'">
                  <div class="status-icon">
                    <i :class="item.status == 'failed' ? 'ai ai-warning-outline' : item.wallet_to == user.wallet ? 'ai ai-add' : 'ai ai-remove'"></i>
                  </div>
                  <div class="status-content">
                    <div class="status-name">{{ item.title }}</div>
                    <div class="status-coin">{{ item.amount }} ASC</div>
                  </div>
                </div>
              </div>
              <div style="display: flex; justify-content: center;">
                <bounce-loader :loading="loadHistory" :color="'#3721d6'"></bounce-loader>
              </div>
            </div>
            <div id="story-buy">
              <div style="display: flex; justify-content: center;">
                <bounce-loader :loading="loading" :color="'#3721d6'"></bounce-loader>
              </div>
              <div class="card" v-for="(history, date) in storeHistory" :key="date">
                <div class="transfers-date">
                  {{ date }}
                </div>
                <div v-for="(item, index) in history" @click="setCheque(item)" :key="index" :class="item.status === 'failed' ? 'failed-coin' : item.wallet_to === user.wallet ? 'receive-coin' : 'remove-coin'">
                  <div class="status-icon">
                    <i :class="item.status === 'failed' ? 'ai ai-warning-outline' : item.wallet_to === user.wallet ? 'ai ai-add' : 'ai ai-remove'"></i>
                  </div>
                  <div class="status-content">
                    <div class="status-name">{{ item.title }}</div>
                    <div class="status-coin">{{ item.amount }} ASC</div>
                  </div>
                </div>
              </div>
              <div style="display: flex; justify-content: center;">
                <bounce-loader :loading="loadHistory" :color="'#3721d6'"></bounce-loader>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      <div id="footer">
        <div class="copyright">
          © 2020 <span class="wallet-name">AstroCoin | Wallet</span> Made With <i class="ai ai-heart"></i> By <a href="https://github.com/astrum-lab" target="_blank">Astrum Lab</a>
        </div>
      </div>-->
      <Modals :user="user" @sendCoin="sendCoin" :cheque="cheque"/>
    </div>
    <UserStatusBlocked v-else-if="user.status === 'blocked'" />
  </div>
</template>
<script>
import Modals from '../components/Modals.vue'
import axios from 'axios'
import UserStatusBlocked from "@/components/UserStatusBlocked.vue";
import ReceiveIcon from "@/components/Icons/ReceiveIcon.vue";
import SendIcon from "@/components/Icons/SendIcon.vue";
import StoreIcon from "@/components/Icons/StoreIcon.vue";
export default {
  name: 'Home',
  components: {StoreIcon, SendIcon, ReceiveIcon, UserStatusBlocked, Modals},
  async mounted() {
    if (this.$route.fullPath === "/transfer/" || this.$route.fullPath === "/transfer") {
      this.$router.push('/')
    }
    this.loading = true
    document.title = 'AstroCoin Wallet'
    if (!this.$store.state.user) {
      await this.$store.dispatch('getUser')
    }
    if (!this.$store.state.walletHistory) {
      await this.$store.dispatch('getHistory').catch((e) => {
        Toast.fire(e.response.data.error, '', 'error')
      })
      this.loading = false
    }
    if (!this.$store.state.orderHistory) {
      await this.$store.dispatch('getOrders').catch((e) => {
        Toast.fire(e.response.data.error, '', 'error')
      })
      this.loading = false
    }
    this.user = this.$store.state.user
    this.walletHistory = this.$store.state.walletHistory
    this.storeHistory = this.$store.state.orderHistory
    this.loading = false
    window.addEventListener('scroll', this.scroll)
    this.old_balance = this.user.balance
    this.counterAnim()
  },
  data: () => ({
    activeItem: 'story-transfers',
    user: {},
    userBalance: 0,
    walletHistory: {},
    walletsEmpty: false,
    storesEmpty: false,
    storeHistory: {},
    cheque: {},
    loading: false,
    loadHistory: false,
    page: 1,
    count: 10,
    delay: 0,
    old_balance: 0,
  }),
  methods: {
    counterAnim(start = 0, end, duration = 500) {
      if (this.old_balance !== this.user.balance) {
        start = this.old_balance
      }
      const target = this.userBalance
      end = this.user.balance
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        this.userBalance = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
    // sort() {
    //   const groups = this.walletHistory.reduce((groups, game) => {
    //     const date = game.date.split('T')[0];
    //     if (!groups[date]) {
    //       groups[date] = [];
    //     }
    //     groups[date].push(game);
    //     return groups;
    //   }, {});
    //   const groupArrays = Object.keys(groups).map((date) => {
    //     return {
    //       date,
    //       data: groups[date]
    //     };
    //   });
    //   this.walletHistory = groupArrays
    // },
    async scroll() {
      if (this.delay == 1) return
        this.delay = 1
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight && this.count >= 10) {
          this.loadHistory = true
          this.page++
          const res = await axios.get(`https://api.astrocoin.uz/api/transfers?page=${this.page}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('__asc_accessIDToken')}`
            }
          })
          this.count = 0
          for (const [key, value] of Object.entries(res.data)) {
            if (key in this.walletHistory) {
              this.walletHistory[key] = this.walletHistory[key].concat(res.data[key])
              delete res.data[key]
            } else {
              this.walletHistory = { ...this.walletHistory, ...res.data }
            }
            this.count += value.length;
          };
        } else {
          this.loadHistory = false
        }
        this.delay = 0
    },
    async sendCoin(data) {
      try {
        await this.$store.dispatch('transfer', data)
        Toast.fire('Sent', '', 'success');
        await this.$store.dispatch('getUser')
        await this.$store.dispatch('getHistory')
        this.user = this.$store.state.user
        this.walletHistory = this.$store.state.walletHistory
        this.counterAnim()
      } catch (e) {
        Toast.fire(this.$store.state.error, '', 'error')
      }
    },
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },
    setCheque(item) {
      this.$store.state.openCheque = true
      this.cheque = item
      this.$store.state.userModal = false
    },
    //
    openUser() {
      this.$store.state.userModal = !this.$store.state.userModal
    },
    openDashboard() {
      window.open(`https://admin.astrocoin.uz/user/login`)
    },
    submitModal() {
      this.$store.state.receiveModal = !this.$store.state.receiveModal
      this.$store.state.userModal = false
      document.querySelector('#modal-back').style.background = '';
      document.querySelector('.main-tools').style.zIndex = '1';
    },
    sendModal() {
      this.$store.state.sendModal = !this.$store.state.sendModal
      this.$store.state.userModal = false
      document.querySelector('#modal-back').style.background = '';
      document.querySelector('.main-tools').style.zIndex = '1';
    },
    openStore() {
      window.open(`https://store.astrocoin.uz/user/login`)
    },
  },
}
</script>

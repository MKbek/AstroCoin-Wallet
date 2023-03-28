import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const URL = 'https://api.astrocoin.uz/api';
Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    url: 'https://api.astrocoin.uz',
    errors: null,
    error: null,
    token: null,
    user: null,
    stacks: null,
    walletHistory: null,
    orderHistory: null,
    receiveModal: false,
    sendModal: false,
    userModal: false,
    confirmLogout: false,
    openCheque: false,
    transferTo: null,
    ranks: null,
  },
  getters: {},
  mutations: {
    error(state, data) {
      if (data.errors) {
        state.errors = data.errors
      } else {
        state.error = data.error
      }
    },
    setToken(state, data) {
      state.token = data.token
      localStorage.setItem("__asc_accessIDToken", data.token)
    },
    setUser(state, user) {
      state.user = user
      localStorage.setItem('__asc_walletToken', user.wallet)
    },
    setWalletHistory(state, history) {
      state.walletHistory = history
    },
    setOrderHistory(state, history) {
      state.orderHistory = history
    },
    setStack(state, stacks) {
      state.stacks = stacks
    },
    removeToken(state) {
      state.token = null
      state.errors = null
      state.error = null
      state.user = null
      state.stacks = null
      state.walletHistory = null
      state.receiveModal = false
      state.sendModal = false
      state.userModal = false
      state.transferTo = null
      localStorage.clear()
    },
    setCheckWallet(state, data) {
      state.transferTo = data
    },
    setRanks(state, data) {
      state.ranks = data
    },
    setNewPhoto(state, data) {
      document.querySelector('.user-pic-block img').src = this.state.url + data.path
    }
  },
  actions: {
    async qwasarCheck({ commit }, data) {
      try {
        await axios.post(`${URL}/pre-register`, data)
      } catch (e) {
        commit("error", e.response.data);
        throw e;
      }
    },
    async login({ commit }, user) {
      try {
        const res = await axios.post(`${URL}/login`, user)
        commit("setToken", res.data);
      } catch (e) {
        commit("error", e.response.data);
        throw e;
      }
    },
    async logout({ commit }) {
      try {
        await axios.post(`${URL}/logout`, {}, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("__asc_accessIDToken")}`,
          },
        })
        commit('removeToken')
      } catch (e) {
        commit('error', e.response.data)
        throw e;
      }
    },
    async register({ commit }, user) {
      try {
        const res = await axios.post(`${URL}/register`, user)
        commit("setToken", res.data);
      } catch (e) {
        commit('error', e.response.data)
        throw e;
      }
    },
    async getStack({ commit }) {
      try {
        const res = await axios.get(`${URL}/stacks`)
        commit("setStack", res.data);
      } catch (e) {
        commit('error', err.response.data)
        throw e;
      }
    },
    async checkWallet({ commit }, address) {
      try {
        const res = await axios.post(`${URL}/wallet`, { address: address }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("__asc_accessIDToken")}`,
          },
        })
        commit('setCheckWallet', res.data)
      } catch (e) {
        commit('error', e.response.data)
        throw e;
      }
    },
    async transfer({ commit }, data) {
      try {
        await axios.post(`${URL}/wallet/transfer`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("__asc_accessIDToken")}`,
          },
        })
      } catch (e) {
        commit('error', e.response.data)
        throw e;
      }
    },
    async updatePassword({ commit }, data) {
      try {
        await axios.post(`${URL}/user/password`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("__asc_accessIDToken")}`,
          }
        })
      } catch (e) {
        commit('error', e.response.data)
        throw e
      }
    },
    async resetPassword({ commit }, email) {
      try {
        await axios.post(`${URL}/reset-password`, email)
      } catch (e) {
        commit('error', e.response.data)
        throw e
      }
    },
    async changePassword({ commit }, data) {
      try {
        await axios.post(`${URL}/reset-password/new`, data)
      } catch (e) {
        commit('error', e.response.data)
        throw e
      }
    },
    async getHistory({ commit }) {
      try {
        const res = await axios.get(`${URL}/transfers`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("__asc_accessIDToken")}`,
          },
        })
        commit('setWalletHistory', res.data)
      } catch (e) {
        commit('error', e.response.data)
        throw e;
      }
    },
    async getOrders({ commit }) {
      try {
        const res = await axios.get(`${URL}/orders`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("__asc_accessIDToken")}`,
          },
        })
        commit('setOrderHistory', res.data)
      } catch (e) {
        commit('error', e.response.data)
        throw e;
      }
    },
    async setPhoto({ commit }, data) {
      try {
        const res = await axios.post(`${URL}/user/photo`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("__asc_accessIDToken")}`,
          },
        })
        commit('setNewPhoto', res.data);
      } catch (e) {
        commit('error', e.response.data)
        throw e;
      }
    },
    async getUser({ commit }, uri = '/') {
      try {
        const res = await axios.get(`${URL}/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("__asc_accessIDToken")}`,
          },
        })
        commit('setUser', res.data)
      } catch (e) {
        if (e.response.status === 401) {
          commit('removeToken')
          uri ? window.location.href = uri : window.location.href = `/login`
          localStorage.clear()
        }
        commit('error', e.response.data)
        throw e
      }
    },
    async getRanks({ commit }) {
      try {
        const res = await axios.get(`${URL}/ranks`);
        commit('setRanks', res.data)
      } catch (e) {
        commit('error', e.response.data)
        throw e;
      }
    }
  },
  modules: {},
});

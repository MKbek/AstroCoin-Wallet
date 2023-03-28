<template>
  <div id="app">
    <AppAds ads="full" />
    <router-view/>
  </div>
</template>
<script>
import AppAds from "@/components/AppAds.vue";

export default {
  name: 'App',
  components: {AppAds},
  mounted() {
    document.title = 'AstroCoin Wallet'
  }
}
</script>

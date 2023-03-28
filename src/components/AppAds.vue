<template>
  <div style="clear: both">
    <template v-if="left">
      <div id="left-content-ads" class="left-ads">
        <div class="ads-favicon">
          <img src="https://play-lh.googleusercontent.com/3W_q4eBPEaxerRzrYnD6cBQub8ZXI9yKDt-vSptrO0L-QEiRzmDBr7KDjWBQMyBoTmhs=w240-h480-rw" alt="">
        </div>
        <div class="ads-title">AstroCoin Wallet</div>
        <div class="ads-description">Download the AstroCoin Wallet mobile app from Google Play to facilitate the process of using</div>
        <div class="btn-tools">
          <a href="https://play.google.com/store/apps/details?id=app.app.astrocoin" target="_blank" class="get googleplay">
            Google Play
          </a>
        </div>
      </div>
    </template>
    <template v-if="full">
      <div id="full-screen-ads" class="full-ads">
        <div class="ads-favicon">
          <img src="https://play-lh.googleusercontent.com/3W_q4eBPEaxerRzrYnD6cBQub8ZXI9yKDt-vSptrO0L-QEiRzmDBr7KDjWBQMyBoTmhs=w240-h480-rw" alt="">
        </div>
        <div class="ads-title">AstroCoin Wallet</div>
        <div class="ads-description">Download the AstroCoin Wallet mobile app from Google Play to facilitate the process of using</div>
        <div class="btn-tools">
          <a href="https://play.google.com/store/apps/details?id=app.app.astrocoin" target="_blank" class="get googleplay">
            Google Play
          </a>
        </div>
        <div class="close-ads" @click.prevent="useWebVersion">
          Use web version
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "AppAds",
  props: {
    ads: String,
  },
  data: () => ({
    full: false,
    left: false,
  }),
  mounted() {
    if (this.ads === 'full') {
      if (localStorage.getItem('__asc_mobileApp_ads') === 'false') {
        this.full = false
      } else {
        this.full = this.androidDetect()
      }
    } else if (this.ads === 'left') {
      this.left = true
    }
  },
  methods: {
    useWebVersion() {
      localStorage.setItem('__asc_mobileApp_ads', 'false')
      this.full = false
    },
    androidDetect() {
      const toMatch = [
        /Android/i,
        /webOS/i,
        /BlackBerry/i,
      ];

      return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
      });
    },
    iOSDetect() {
      const toMatch = [
        /iPhone/i,
        /iPad/i,
        /iPod/i,
      ];

      return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
      });
    }
  }
}
</script>

<style scoped>
@import url('@/style/ads.css');
</style>
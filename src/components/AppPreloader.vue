<template>
  <div id="app-preloader">
    <div class="app-brand">
      <img src="@/assets/wallet.webp" alt="AstroCoin" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPreloader",
  mounted() {
    window.onload = () => {
      setTimeout(() => {
        document.getElementById("app-preloader").style.opacity = '0';
        setTimeout(() => {
          document.getElementById("app-preloader").style.display = "none";
        }, 500);
      }, 500);
    };
  }
}
</script>

<style scoped>

</style>
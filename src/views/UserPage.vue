<template>
  <div id="user-app">
    <div class="user-page">
      <router-link to="/" class="close-page">
        <i class="ai ai-arrow-back"></i>
        <div class="close-title">Back</div>
      </router-link>
      <div class="user-photo">
        <div class="user-pic-block">
          <img :src="user.photo ? this.$store.state.url + user.photo : require(`../assets/default.webp`)" alt="" class="user-pic" ref="image">
        </div>
        <input
          type="file"
          @change="onFileChange"
          ref="fileInput"
          style="display: none"
          accept=".jpg, .png, .jpeg, |image/*"
        >
        <div class="edit-user-pic" @click="$refs.fileInput.click()">
          <i class="ai ai-camera-outline"></i>
        </div>
      </div>
      <div class="user-fullname">{{ user.name }} {{ user.last_name }}
        <VerifyAccountBadge v-if="user.verify" width="28" height="28" />
      </div>
      <div class="user-email">{{ user.email }}</div>
      <div class="user-tools">
        <ul class="tools-items">
          <router-link tag="li" to="/ranks"><i class="ai ai-trending-up"></i>Student Ranking</router-link>
        </ul>
        <ul class="tools-items">
          <li><i class="ai ai-person-outline"></i>{{ user.qwasar }}</li>
          <li><i class="ai ai-school-outline"></i>{{ user.stack }}</li>
          <li><i class="ai ai-call-outline"></i><span>+998{{ user.number }}</span></li>
          <li><i class="ai ai-wallet-outline"></i>{{ user.wallet.slice(0, 7) + '.......' + user.wallet.slice(-9, user.wallet.length) }}</li>
        </ul>
        <ul class="tools-items">
          <router-link tag="li" to="/update-password"><i class="ai ai-key-outline"></i>Change password</router-link>
        </ul>
        <ul class="tools-items">
          <li @click="logout" class="btn-log-out"><i class="ai ai-log-out-outline"></i>Log Out</li>
        </ul>
      </div>
    </div>
    <img v-if="croppedImage" :src="croppedImage" alt="">
    <div id="modals" class="modals">
      <div id="upload-avatar" :class="{ active: openUpload }">
        <div class="modal-header">
          <div class="modal-title">Upload</div>
          <div class="modal-tools">
            <div class="modal-close" @click="closeModals">
              <i class="ai ai-close"></i>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <Cropper
              ref="cropper"
              :src="image"
              stencil-component="circle-stencil"
          />
        </div>
        <div class="upload-tools">
          <button @click="reset">Reset</button>
          <button @click="uploadImage">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import VerifyAccountBadge from "@/components/Icons/VerifyAccountBadge.vue";
export default {
  name: "UserPage",
  data: () => ({
    user: {},
    image: null,
    openUpload: false,
    croppedImage: null,
  }),
  components: {
    VerifyAccountBadge,
    Cropper,
  },
  async mounted() {
    this.$store.state.userModal = false;
    document.title = 'AstroCoin | My Profile'
    if (!this.$store.state.user) {
      await this.$store.dispatch('getUser')
    }
    this.user = this.$store.state.user
    window.addEventListener('keydown', (e) => {
      if (e.key == "Escape") {
        this.$router.push('/')
      }
    })
  },
  methods: {
    closeModals() {
      this.openUpload = false
    },
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    },
    reset() {
      this.$refs.cropper.reset();
      this.image = null;
      this.openUpload = false
    },
    onFileChange(e) {
      const file = e.target.files[0]
      this.image = URL.createObjectURL(file)
      this.openUpload = true
    },
    async uploadImage() {
      const { canvas } = this.$refs.cropper.getResult();
			if (canvas) {
				const form = new FormData();
				await canvas.toBlob(blob => {
					form.append('photo', blob);
          this.$store.dispatch('setPhoto', form).then(res => {
            this.$refs.image.src = this.$store.state.url + res.data.path
          })
				}, 'image/jpeg');
			}
      this.openUpload = false
      Toast.fire('Success', 'Photo uploaded', 'success')
		},
  }
}
</script>
<style scoped>
@import url('@/style/userpage.css');
#upload-avatar {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 12px;
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  transform: scale(0.9);
  box-shadow: 0 0 15px #c2c2c2;
  position: fixed;
  top: 155px;
  z-index: 8;
}

#upload-avatar.active {
  visibility: visible;
  opacity: 1;
  transform: scale(1.1);
}

#upload-avatar .vue-advanced-cropper {
  width: 350px;
  height: 350px;
  overflow: hidden;
  border-radius: 10px;
}

#upload-avatar .upload-tools {
  display: flex;
  justify-content: center;
  margin: 35px 5px 5px;
}

#upload-avatar .upload-tools button {
  border: none;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
}

#upload-avatar .upload-tools button:hover {
  background: #3721d6;
  color: #fff;
}

</style>
